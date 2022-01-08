import type { Action, State } from "./types";
import initializer from "./initializer";
import Operations from "./operations.enum";

export default function reducer<T>(
  state: State<T>,
  action: Action<T>
): State<T> {
  switch (action.type) {
    case Operations.NEXT_BATCH:
      const { pageInfo, data } = action;

      return {
        ...state,
        data: state.data.concat(data),
        endCursor: pageInfo.endCursor,
        hasNextPage: pageInfo.hasNextPage,
      };

    case Operations.PREVIOUS_BATCH:
      // TODO
      return state;

    case Operations.RESET:
      return initializer({ data: [], endCursor: state.initialCursor });

    default:
      return initializer({ data: [], endCursor: state.initialCursor });
  }
}
