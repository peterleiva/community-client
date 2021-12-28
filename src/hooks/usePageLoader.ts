import { Reducer, useReducer } from "react";
import type { Cursor, PageInfo } from "types";

enum Operations {
  NEXT_BATCH,
  PREVIOUS_BATCH,
  RESET,
}

type PageState<T> = {
  data: T[];
  caughUp: boolean;
  cursor?: Cursor;
};

type PageAction<T> =
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

function pageLoader<T>(
  state: PageState<T>,
  action: PageAction<T>
): PageState<T> {
  switch (action.type) {
    case Operations.NEXT_BATCH:
      const { pageInfo, data } = action;

      const cursor = pageInfo?.endCursor;
      const hasNextPage = pageInfo?.hasNextPage ?? true;

      return {
        ...state,
        caughUp: !hasNextPage,
        data: state.data.concat(data),
        cursor,
      };

    case Operations.PREVIOUS_BATCH:
      return state;

    case Operations.RESET:
      return {
        ...state,
        data: [],
        caughUp: false,
      };

    default:
      return state;
  }
}

export default function usePageLoader<T>(startCursor?: Cursor) {
  const [state, dispatch] = useReducer<Reducer<PageState<T>, PageAction<T>>>(
    pageLoader,
    {
      data: [],
      caughUp: false,
      cursor: startCursor,
    }
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
