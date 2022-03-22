import { useReducer } from "react";
import { append, prepend, mergeRight } from "ramda";
import { v4 as uuidv4 } from "uuid";
import type Toast from "./Toast";

type WithID<T> = T & { id: string };

type ToastMessage = ElementProps<typeof Toast>;
type Action =
  | { type: "NOTIFY"; payload: ToastMessage }
  | { type: "APPEND"; payload: ToastMessage }
  | { type: "PREPEND"; payload: ToastMessage }
  | { type: "CLOSE"; id: string }
  | { type: "CLEAR" };

type State = WithID<ToastMessage>[];

export default function useNotifier() {
  const [messages, dispatch] = useReducer(notifier, []);

  return {
    messages,
    dispatch,
  };
}

const genId = (toast: ToastMessage): WithID<ToastMessage> =>
  mergeRight({ id: uuidv4() })(toast);

function notifier(state: State, action: Action): State {
  switch (action.type) {
    case "APPEND":
    case "NOTIFY": {
      return append(genId(action.payload), state);
    }

    case "PREPEND": {
      return prepend(genId(action.payload), state);
    }

    case "CLOSE": {
      return state.filter(message => message.id !== action.id);
    }

    case "CLEAR": {
      return [];
    }

    default:
      throw new Error(`Invalid Toast notifer operation`);
  }
}
