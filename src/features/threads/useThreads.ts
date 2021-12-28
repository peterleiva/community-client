import { useQuery } from "@apollo/client";
import type { Cursor } from "types";
import type { Thread } from "./types";
import { GET_THREADS, PageVariables, GetThreadsQuery } from "./graphql";
import usePageLoader from "hooks/usePageLoader";
import { threadsConnectionMapper } from "./mapper";
import { ThreadConnection } from ".";

type Options = {
  sample?: number;
  threads?: ThreadConnection;
};

export default function useThreads({ sample, threads }: Options = {}) {
  const { cursor, nextPage, ...pageLoader } = usePageLoader<Thread>({
    startCursor: threads?.pageInfo?.endCursor,
    data: threadsConnectionMapper(threads),
  });

  const { loading, data, error } = useQuery<GetThreadsQuery, PageVariables>(
    GET_THREADS,
    {
      variables: {
        page: {
          after: cursor,
          first: sample,
        },
      },
    }
  );

  return {
    ...pageLoader,
    loading,
    error,
    nextPage: () =>
      nextPage(threadsConnectionMapper(data?.threads), data?.threads?.pageInfo),
  };
}
