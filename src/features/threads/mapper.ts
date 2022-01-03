import { ThreadMapper, ThreadConnection } from "./thread-mapper";
import type { Thread } from "./types";

export function threadsConnectionMapper(data?: ThreadConnection): Thread[] {
  const mapper = new ThreadMapper();
  const threads = data?.edges?.map(({ node }) => mapper.toObject(node)) ?? [];

  return threads;
}
