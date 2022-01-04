import type { Cursor } from "types";
import type { PageState } from "./types";

export type InitArgs<T> = {
  cursor?: Cursor;
  data: T[];
};

export default function initializer<T>({
  cursor,
  data,
}: InitArgs<T>): PageState<T> {
  return {
    cursor,
    data,
    caughUp: false,
    hasNextPage: true,
  };
}
