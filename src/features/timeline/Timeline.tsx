import type { Thread } from "types";
import EmptyState from "./EmptyState";
import Card from "./Card";

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
        <Card key={thread.id} {...thread} />
      ))}
    </>
  );
}
