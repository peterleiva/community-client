import { useQuery } from "@apollo/client";
import type { Thread } from "./types";
import { GET_THREADS, PageVariables, GetThreadsQuery } from "./graphql";
import { usePageLoader } from "hooks";
import { threadsConnectionMapper } from "./mapper";
import { ThreadConnection } from ".";
import { useCallback, useEffect, useState } from "react";
import { Cursor, PageInfo } from "types";

type Options = {
  sample?: number;
  threads?: ThreadConnection;
};

export default function useThreads({
  sample,
  threads: initialThreads,
}: Options = {}) {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [threads, setThreads] = useState<Thread[]>(
    threadsConnectionMapper(initialThreads)
  );

  const [page, setPage] = useState<PageInfo | undefined>(
    initialThreads?.pageInfo
  );

  const [batches, setBatches] = useState<ThreadConnection[]>([]);
  const { loading, data, error } = useQuery<GetThreadsQuery, PageVariables>(
    GET_THREADS,
    {
      fetchPolicy: "no-cache",
      variables: {
        page: {
          after: page?.endCursor,
          first: sample,
        },
      },
    }
  );

  const total = data?.threads.total ?? -Infinity;

  useEffect(() => {
    const threads = data?.threads ?? [];

    setBatches(prev => prev.concat(threads));
  }, [data, setBatches]);

  const next = useCallback(() => {
    const nextBatch = batches.shift();

    if (nextBatch && hasNextPage) {
      const threads = threadsConnectionMapper(nextBatch);

      setThreads(prev => prev.concat(threads));
      setPage(nextBatch.pageInfo);
      setHasNextPage(nextBatch.pageInfo.hasNextPage);
      setBatches(prev => {
        prev.shift();
        return prev;
      });
    }
  }, [batches, setThreads, setPage, setHasNextPage, hasNextPage]);

  return {
    loading,
    total,
    data: threads,
    caughUp: !hasNextPage,
    hasNextPage,
    page: data,
    error,
    next,
  };
}
