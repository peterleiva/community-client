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
  hasNextPage: boolean;
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

function init<T>({
  cursor,
  data,
}: {
  cursor?: Cursor;
  data: T[];
}): PageState<T> {
  return {
    cursor,
    data,
    caughUp: false,
    hasNextPage: true,
  };
}

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
        hasNextPage,
      };

    case Operations.PREVIOUS_BATCH:
      // TODO
      return state;

    case Operations.RESET:
      return init({ data: [], cursor: state.cursor });

    default:
      return init({ data: state.data, cursor: state.cursor });
  }
}

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
    pageLoader,
    {
      data,
      cursor: startCursor,
    },
    init
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
