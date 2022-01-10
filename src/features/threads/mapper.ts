import mapper, { ThreadConnection } from "./thread-mapper";
import type { Thread } from "./types";

export function threadsConnectionMapper(data?: ThreadConnection): Thread[] {
  const threads = data?.edges?.map(({ node }) => mapper(node)) ?? [];

  return threads;
}
