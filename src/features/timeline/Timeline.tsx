import type { Thread } from "types";
import ThreadCard from "./ThreadCard";

type TimelineProps = {
  threads: Thread[];
};

export default function Timeline({ threads }: TimelineProps): JSX.Element {
  return (
    <>
      {threads.map(thread => (
        <ThreadCard key={thread.id} {...thread} />
      ))}
    </>
  );
}
