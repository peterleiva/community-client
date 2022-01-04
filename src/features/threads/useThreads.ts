import { useQuery } from "@apollo/client";
import type { Thread } from "./types";
import { GET_THREADS, PageVariables, GetThreadsQuery } from "./graphql";
import { usePageLoader } from "hooks";
import { threadsConnectionMapper } from "./mapper";
import { ThreadConnection } from ".";

type Options = {
  sample?: number;
  threads?: ThreadConnection;
};

export default function useThreads({ sample, threads }: Options = {}) {
  const { cursor, nextPage, ...pageLoader } = usePageLoader<Thread>({
    cursor: threads?.pageInfo?.endCursor,
    data: threadsConnectionMapper(threads),
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

  const total = data?.threads.total ?? -Infinity;

  return {
    ...pageLoader,
    loading,
    total,
    error,
    nextPage: () =>
      nextPage(threadsConnectionMapper(data?.threads), data?.threads?.pageInfo),
  };
}
