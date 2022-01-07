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
  sample,
  threads: initialThreads,
}: Options = {}) {
  const {
    hasNextPage,
    next,
    data: threads,
    cursor,
    setBatches,
  } = usePageLoader({ data: initialThreads, map: threadsConnectionMapper });

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
    const threads = data?.threads ?? [];

    setBatches(prev => prev.concat(threads));
  }, [data, setBatches]);

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
