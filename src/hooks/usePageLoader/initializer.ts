import type { Connection, Cursor } from "types";
import type { State } from "./types";

export type InitArgs<T, U extends Connection<any>> = {
  map: (data: U) => T[];
  data?: U;
};

export default function initializer<T, U extends Connection<any>>({
  data: initial,
  map,
}: InitArgs<T, U>): State<T, U> {
  return {
    pageInfo: initial?.pageInfo,
    data: initial ? map(initial) : [],
    hasNextPage: true,
    batches: [],
    map,
  };
}
