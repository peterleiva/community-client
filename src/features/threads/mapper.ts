import { ThreadMapper, ThreadConnection } from "./thread-mapper";
import type { Thread } from "./types";

export function getThreadsMapper(data?: {
  threads: ThreadConnection;
}): Thread[] {
  const mapper = new ThreadMapper();
  const threads =
    data?.threads?.edges?.map(({ node }) => mapper.toObject(node)) ?? [];

  return threads;
}
