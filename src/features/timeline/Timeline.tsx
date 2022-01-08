import { useEffect, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { Thread } from "features/threads";
import EmptyState from "./EmptyState";
import Card from "./Card";
import styles from "./Timeline.module.scss";
import { CaughUp } from "components";

type TimelineProps = {
  threads?: Thread[];
  onReachEnd?: () => void;
  caughUp?: boolean;
  loading?: boolean;
};

export default function Timeline({
  threads = [],
  onReachEnd,
  caughUp = false,
  loading = false,
}: TimelineProps): JSX.Element {
  const { ref, inView } = useInView({ rootMargin: "1000%" });

  useEffect(() => {
    if (inView && !caughUp) {
      onReachEnd?.();
    }
  }, [inView, caughUp, onReachEnd]);

  const targetId = threads[threads.length - 1]?.id;

  if (threads.length == 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <div className={styles["timeline-cards"]}>
        {threads.map(thread => (
          <div key={thread.id} ref={targetId === thread.id ? ref : null}>
            <Card key={thread.id} {...thread} />
          </div>
        ))}
      </div>

      {loading && <p className="text-center">loading...</p>}

      {!loading && caughUp && (
        <CaughUp
          className={styles["caugh-up"]}
          lastActivity={threads[threads.length - 1].activity}
        />
      )}
    </div>
  );
}
