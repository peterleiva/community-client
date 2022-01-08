import { useQuery } from "@apollo/client";
import { GET_THREADS, PageVariables, GetThreadsQuery } from "./graphql";
import { usePageLoader } from "hooks";
import { threadsConnectionMapper } from "./mapper";
import { ThreadConnection } from ".";
import { useEffect } from "react";

type Options = {
  sample?: number;
  threads?: ThreadConnection;
};

export default function useThreads({
  sample = 40,
  threads: initialThreads,
}: Options = {}) {
  const {
    hasNextPage,
    next,
    data: threads,
    cursor,
    attachBatch,
  } = usePageLoader({
    endCursor: initialThreads?.pageInfo.endCursor,
    data: threadsConnectionMapper(initialThreads),
  });

  const { loading, data, error } = useQuery<GetThreadsQuery, PageVariables>(
    GET_THREADS,
    {
      fetchPolicy: "no-cache",
      variables: {
        page: {
          after: cursor,
          first: sample,
        },
      },
    }
  );

  useEffect(() => {
    if (!loading && !error && data?.threads) {
      const { threads } = data;
      const { pageInfo } = threads;

      attachBatch({
        data: threadsConnectionMapper(threads),
        pageInfo,
      });
    }
  }, [data, attachBatch, loading, error]);

  return {
    loading,
    data: threads,
    caughUp: !hasNextPage,
    hasNextPage,
    page: data,
    error,
    next,
  };
}
