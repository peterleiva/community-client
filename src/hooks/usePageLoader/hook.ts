import { Reducer, useReducer } from "react";
import type { Cursor, PageInfo } from "types";
import type { PageAction, PageState } from "./types";
import reducer from "./reducer";
import initializer from "./initializer";
import Operations from "./operations.enum";

type Options<T> = {
  startCursor?: Cursor;
  data?: T[];
};

export default function usePageLoader<T>({
  startCursor,
  data = [],
}: Options<T> = {}) {
  const [state, dispatch] = useReducer<
    Reducer<PageState<T>, PageAction<T>>,
    { data: T[]; cursor?: Cursor }
  >(
    reducer,
    {
      data,
      cursor: startCursor,
    },
    initializer
  );

  const nextPage = (data: T[], pageInfo?: PageInfo) =>
    dispatch({ type: Operations.NEXT_BATCH, data, pageInfo });

  const clear = () => dispatch({ type: Operations.RESET, cursor: startCursor });

  return {
    ...state,
    nextPage,
    clear,
  };
}
