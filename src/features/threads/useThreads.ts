import { useQuery } from "@apollo/client";
import type { Cursor } from "types";
import type { Thread } from "./types";
import { GET_THREADS, PageVariables, GetThreadsQuery } from "./graphql";
import usePageLoader from "hooks/usePageLoader";
import { getThreadsMapper } from "./mapper";

type Options = {
  sample?: number;
  startCursor?: Cursor;
};

export default function useThreads({ sample, startCursor }: Options = {}) {
  const { cursor, nextPage, ...pageLoader } =
    usePageLoader<Thread>(startCursor);

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
    nextPage: () => nextPage(getThreadsMapper(data), data?.threads?.pageInfo),
  };
}
