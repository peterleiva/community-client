import { Reducer, useReducer } from "react";
import { User } from "types";
import { Thumbnail, ThumbnailSize } from "components";
import { partition } from "utils";
import {
  AiOutlinePlus as PlusIcon,
  AiOutlineDoubleRight as CollapseIcon,
} from "react-icons/ai";
import styles from "./ParticipantsList.module.scss";

type ParticipantsProps = {
  participants: User[];
  size?: number;
};

type State = {
  activated: User[];
  collapsed: User[];
  participants: User[];
  size: number;
  expanded: boolean;
  collapsable: boolean;
};

type Action =
  | {
      type: "EXPAND";
    }
  | { type: "RESET" };

type InitArgs = {
  participants: User[];
  size: number;
};

function init({ size, participants }: InitArgs): State {
  const [activated, collapsed] = partition<User>(
    participants,
    ([first]) => first.length < size
  );

  return {
    participants,
    size,
    activated,
    collapsed,
    expanded: false,
    collapsable: collapsed.length > 0,
  };
}

function expander(state: State, action: Action): State {
  switch (action.type) {
    case "EXPAND":
      return {
        ...state,
        activated: state.participants,
        collapsed: [],
        expanded: true,
      };

    case "RESET":
    default:
      const { size, participants } = state;
      return init({ size, participants });
  }
}

export default function ThreadParticipantsCard({
  participants,
  size = 2,
}: ParticipantsProps) {
  const [state, dispatch] = useReducer<Reducer<State, Action>, InitArgs>(
    expander,
    { size, participants },
    init
  );

  return (
    <div className={styles.stack}>
      {state.activated.map(user => {
        return (
          <Thumbnail
            key={user.id}
            user={user}
            size={ThumbnailSize.TINY}
            framed
          />
        );
      })}

      {state.expanded ? (
        <CollapseIcon size="18" onClick={() => dispatch({ type: "RESET" })} />
      ) : (
        state.collapsable && (
          <span
            onClick={() => dispatch({ type: "EXPAND" })}
            role="button"
            tabIndex={0}
          >
            <Thumbnail size={ThumbnailSize.TINY} framed>
              <PlusIcon /> {state.collapsed.length}
            </Thumbnail>
          </span>
        )
      )}
    </div>
  );
}
