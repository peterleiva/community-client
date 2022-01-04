import { gql } from "@apollo/client";
import { Cursor } from "types";
import { ThreadConnection } from "..";

export type GetThreadsQuery = {
  threads: ThreadConnection;
};

export type PageVariables = {
  page: {
    first?: number;
    after?: Cursor;
  };
};

export const GET_THREADS = gql`
  query GetThreads($page: ForwardPageInput) {
    threads(page: $page) {
      total

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
