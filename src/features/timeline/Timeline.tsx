import type { Thread } from "types";
import EmptyState from "./EmptyState";
import ThreadCard from "./ThreadCard";

type TimelineProps = {
  threads: Thread[];
};

export default function Timeline({ threads }: TimelineProps): JSX.Element {
  if (threads.length == 0) {
    return <EmptyState />;
  }

  return (
    <>
      {threads.map(thread => (
        <ThreadCard key={thread.id} {...thread} />
      ))}
    </>
  );
}
