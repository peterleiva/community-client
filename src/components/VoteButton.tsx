import React, { useReducer, MouseEventHandler } from "react";
import {
  FaChevronUp as UpVoteIcon,
  FaChevronDown as DownVoteIcon,
} from "react-icons/fa";
import NumberFormatCompact from "./NumberFormatCompact";
import styles from "./VoteButton.module.scss";

type VoteButtonProps = {
  votes: number;
  onUpVote?: (votes: number) => void;
  onDownVote?: (votes: number) => void;
};

type VoteState = {
  up: boolean;
  down: boolean;
  votes: number;
};

enum Actions {
  UP,
  DOWN,
}

type VoterAction = {
  type: Actions;
};

function ballot(
  { up, down, votes }: VoteState,
  action: VoterAction
): VoteState {
  switch (action.type) {
    case Actions.UP:
      return {
        up: !up,
        down: false,
        votes: up ? votes - 1 : votes + 1,
      };

    case Actions.DOWN:
      return {
        up: false,
        down: !down,
        votes: down ? votes + 1 : votes - 1,
      };

    default:
      return { up, down, votes };
  }
}

export default function VoteButton({
  votes,
  onUpVote,
  onDownVote,
}: VoteButtonProps) {
  const [interaction, setVote] = useReducer(ballot, {
    up: false,
    down: false,
    votes,
  });

  const handleUpVote: MouseEventHandler<HTMLButtonElement> = () => {
    setVote({ type: Actions.UP });
    onUpVote?.(interaction.votes);
  };

  const handleDownVote: MouseEventHandler<HTMLButtonElement> = () => {
    setVote({ type: Actions.DOWN });
    onDownVote?.(interaction.votes);
  };

  const classNames: string[] = [styles.group];

  if (interaction.up || interaction.down) {
    classNames.push(styles.voted);
    classNames.push(interaction.up ? styles.up : styles.down);
  }

  return (
    <div className={classNames.join(" ")}>
      <button name="upvote" onClick={handleUpVote} disabled={interaction.down}>
        <UpVoteIcon />
      </button>

      <NumberFormatCompact value={interaction.votes} zeroToken={"\u{2501}"} />

      <button
        name="downvote"
        onClick={handleDownVote}
        disabled={interaction.up}
      >
        <DownVoteIcon />
      </button>
    </div>
  );
}
