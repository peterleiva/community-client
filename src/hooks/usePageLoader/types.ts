import type { Cursor, PageInfo } from "types";
import type Operations from "./operations.enum";

export type Batch<T> = {
  data: T[];
  pageInfo: PageInfo;
};

export type State<T> = {
  data: T[];
  batches: Batch<T>[];
  hasNextPage: boolean;
  initialCursor?: Cursor;
  endCursor?: Cursor;
};

export type Action<T> =
  | ({
      type: Operations.NEXT_BATCH;
    } & Batch<T>)
  | {
      type: Operations.RESET;
    }
  | {
      type: Operations.PREVIOUS_BATCH;
    };
