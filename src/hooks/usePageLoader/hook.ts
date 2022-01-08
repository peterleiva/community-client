import { Reducer, useCallback, useReducer, useState } from "react";
import type { Action, Batch, State } from "./types";
import reducer from "./reducer";
import initializer, { InitArgs } from "./initializer";
import Operations from "./operations.enum";

export default function usePageLoader<T>(args: InitArgs<T>) {
  const [batch, setBatch] = useState<Batch<T> | null>(null);

  const [{ endCursor: cursor, data, hasNextPage }, dispatch] = useReducer<
    Reducer<State<T>, Action<T>>,
    InitArgs<T>
  >(reducer, args, initializer);

  const next = useCallback(() => {
    if (batch && hasNextPage) {
      dispatch({ type: Operations.NEXT_BATCH, ...batch });
      setBatch(null);
    }
  }, [batch, dispatch, hasNextPage]);

  return {
    cursor,
    data,
    hasNextPage,
    attachBatch: setBatch,
    next,
  };
}
