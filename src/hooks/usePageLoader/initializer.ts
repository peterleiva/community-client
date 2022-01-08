import type { Connection, Cursor } from "types";
import type { State } from "./types";

export type InitArgs<T> = {
  data?: T[];
  endCursor?: Cursor;
};

export default function initializer<T>({
  data,
  endCursor,
}: InitArgs<T>): State<T> {
  return {
    data: data ?? [],
    hasNextPage: true,
    batches: [],
    initialCursor: endCursor,
    endCursor,
  };
}
