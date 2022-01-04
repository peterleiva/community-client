import { Reducer, useReducer } from "react";
import type { PageInfo } from "types";
import type { Action, State } from "./types";
import reducer from "./reducer";
import initializer, { InitArgs } from "./initializer";
import Operations from "./operations.enum";

export default function usePageLoader<T>({
  cursor: startCursor,
  data = [],
}: InitArgs<T> = {}) {
  const [state, dispatch] = useReducer<
    Reducer<State<T>, Action<T>>,
    InitArgs<T>
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
