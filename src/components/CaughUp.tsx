import { DateTime } from "luxon";
import RelativeTime from "./RelativeTime";
import { BsCheckCircle as DoneIcon } from "react-icons/bs";
import styles from "./CaughUp.module.scss";
import { applyClasses } from "lib";

type CaughUpProps = {
  title?: string;
  lastActivity: DateTime;
  className?: string;
};

export default function CaughUp({
  title,
  lastActivity,
  className = "",
}: CaughUpProps) {
  const classes = applyClasses(styles.container, className);

  return (
    <div className={classes}>
      <div>
        <h1>{title ?? "You are caugh up"}</h1>
        <p>
          <RelativeTime time={lastActivity} />
        </p>
      </div>
      <DoneIcon className={styles.icon} />
    </div>
  );
}
