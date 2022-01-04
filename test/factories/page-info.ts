import { Factory } from "fishery";
import type { PageInfo } from "types";
import CursorFactory from "./cursor";

export default Factory.define<PageInfo>(() => {
  const [startCursor, endCursor] = CursorFactory.buildList(2);

  return {
    startCursor,
    endCursor,
    hasNextPage: false,
    hasPreviousPage: false,
  };
});
