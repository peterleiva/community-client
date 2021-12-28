import type { Cursor } from "types";
import type { ThreadConnection } from "./thread-mapper";
import { GET_THREADS, GetThreadsQuery, PageVariables } from "./graphql";
import { createApolloClient } from "lib";

const client = createApolloClient();

export async function listThreads(cursor?: Cursor): Promise<ThreadConnection> {
  const { data } = await client.query<GetThreadsQuery, PageVariables>({
    query: GET_THREADS,
    variables: {
      page: {
        after: cursor,
      },
    },
  });

  return data.threads;
}
