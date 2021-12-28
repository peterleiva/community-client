import type { Thread } from "types";
import { Button, CaughUp } from "components";
import EmptyState from "./EmptyState";
import Card from "./Card";
import styles from "./Timeline.module.scss";

type TimelineProps = {
  threads?: Thread[];
  caughUp: boolean;
  loading: boolean;
  onNextPage: () => void;
};

export default function Timeline({
  threads = [],
  onNextPage,
  caughUp = false,
  loading = false,
}: TimelineProps): JSX.Element {
  if (threads.length == 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.timeline}>
      {threads.map(thread => (
        <Card key={thread.id} {...thread} />
      ))}
      <div>
        {loading && <small>loading...</small>}
        {caughUp && (
          <CaughUp lastActivity={threads[threads.length - 1].activity} />
        )}
        {!caughUp && (
          <Button
            renderContainer={props => (
              <button {...props} onClick={onNextPage}>
                Load more
              </button>
            )}
          />
        )}
      </div>
    </div>
  );
}
