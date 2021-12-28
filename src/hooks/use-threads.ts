import { ApolloError, gql, useQuery } from "@apollo/client";
import { ThreadConnection, ThreadMapper } from "lib";
import { useReducer } from "react";
import { Cursor, Thread } from "types";

type Hook<T> = {
  loading: boolean;
  data: T;
  error: ApolloError | undefined;
  caughUp: boolean;
  clear: () => void;
  nextPage: () => void;
};

export const GET_THREADS = gql`
  query GetThreads($page: ForwardPageInput) {
    threads(page: $page) {
      pageInfo {
        endCursor
        hasNextPage
      }

      edges {
        node {
          id
          title
          lastActivity
          replies

          participants {
            edges {
              node {
                id
                avatar
              }
            }
            interactions
          }

          post {
            id
            message
            likes

            author {
              id
              avatar
              name {
                nick
              }
            }
          }
        }
      }
    }
  }
`;

export function mapper(data?: { threads: ThreadConnection }): Thread[] {
  const mapper = new ThreadMapper();
  const threads =
    data?.threads?.edges?.map(({ node }) => mapper.toObject(node)) ?? [];

  return threads;
}

enum Operations {
  NEXT_BATCH,
  PREVIOUS_BATCH,
  RESET,
}

type PageState = {
  threads: Thread[];
  caughUp: boolean;
  cursor?: Cursor;
};

type PageActions = {
  type: Operations;
  data?: { threads: ThreadConnection };
  cursor?: Cursor;
};

function pageLoader(state: PageState, action: PageActions): PageState {
  switch (action.type) {
    case Operations.NEXT_BATCH:
      const pageInfo = action?.data?.threads?.pageInfo;
      const cursor = pageInfo?.endCursor;
      const hasNextPage = pageInfo?.hasNextPage ?? true;

      return {
        caughUp: !hasNextPage,
        threads: state.threads.concat(mapper(action.data)),
        cursor,
      };

    case Operations.PREVIOUS_BATCH:
      return state;

    case Operations.RESET:
      return {
        threads: [],
        caughUp: false,
        cursor: state.cursor,
      };

    default:
      return state;
  }
}

type ThreadQuery = {
  threads: ThreadConnection;
};

type ThreadQueryVariables = {
  page: {
    first?: number;
    after?: Cursor;
  };
};

type UseThreadOptions = {
  sample?: number;
  startCursor?: Cursor;
};

export default function useThreads({
  sample,
  startCursor,
}: UseThreadOptions = {}): Hook<Thread[]> {
  const [state, dispatch] = useReducer(pageLoader, {
    threads: [],
    caughUp: false,
    cursor: startCursor,
  });

  const { loading, data, error } = useQuery<ThreadQuery, ThreadQueryVariables>(
    GET_THREADS,
    {
      variables: {
        page: {
          after: state.cursor,
          first: sample,
        },
      },
    }
  );

  const nextPage = () => dispatch({ type: Operations.NEXT_BATCH, data });
  const clear = () => dispatch({ type: Operations.RESET, cursor: startCursor });

  return {
    loading,
    data: state.threads,
    error,
    clear,
    nextPage: nextPage,
    caughUp: state.caughUp,
  };
}
