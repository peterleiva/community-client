import type { Thread } from "features/threads";
import EmptyState from "./EmptyState";
import Card from "./Card";
import styles from "./Timeline.module.scss";

type TimelineProps = {
  threads?: Thread[];
};

export default function Timeline({ threads = [] }: TimelineProps): JSX.Element {
  if (threads.length == 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.timeline}>
      {threads.map(thread => (
        <Card key={thread.id} {...thread} />
      ))}
    </div>
  );
}
