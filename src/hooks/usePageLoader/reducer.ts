import initializer from "./initializer";
import Operations from "./operations.enum";
import type { PageAction, PageState } from "./types";

export default function reducer<T>(
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
      return initializer({ data: [], cursor: state.cursor });

    default:
      return initializer({ data: state.data, cursor: state.cursor });
  }
}
