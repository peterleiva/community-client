import type { Connection, Cursor, PageInfo } from "types";
import type Operations from "./operations.enum";

export type State<T, U extends Connection<any>> = {
  data: T[];
  batches: T[];
  pageInfo?: PageInfo;
  hasNextPage: boolean;
  map: (data: U) => T[];
};

export type Action<T> =
  | {
      type: Operations.NEXT_BATCH;
      data: T[];
      pageInfo?: PageInfo;
    }
  | {
      type: Operations.RESET;
      cursor?: Cursor;
    }
  | {
      type: Operations.PREVIOUS_BATCH;
    };
