import type { Cursor, PageInfo } from "types";
import type Operations from "./operations.enum";

export type PageState<T> = {
  data: T[];
  caughUp: boolean;
  cursor?: Cursor;
  hasNextPage: boolean;
};

export type PageAction<T> =
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
