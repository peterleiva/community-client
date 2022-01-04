import type { QueryOptions } from "@apollo/client";
import type { Cursor } from "types";
import type { ThreadConnection } from "./thread-mapper";
import { GET_THREADS, GetThreadsQuery, PageVariables } from "./graphql";
import { createApolloClient } from "lib";

type listThreadsOptions = {
  cursor?: Cursor;
  options?: Omit<
    QueryOptions<GetThreadsQuery, PageVariables>,
    "query" | "variables"
  >;
};

const client = createApolloClient();

export async function listThreads({
  cursor,
  options,
}: listThreadsOptions = {}): Promise<ThreadConnection> {
  const { data } = await client.query<GetThreadsQuery, PageVariables>({
    fetchPolicy: "no-cache",
    query: GET_THREADS,
    variables: {
      page: {
        after: cursor,
      },
    },
    ...options,
  });

  return data.threads;
}
