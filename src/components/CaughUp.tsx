import { DateTime } from "luxon";
import RelativeTime from "./RelativeTime";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./CaughUp.module.scss";

type CaughUpProps = {
  title?: string;
  lastActivity: DateTime;
};

export default function CaughUp({ title, lastActivity }: CaughUpProps) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{title ?? "You are caugh up"}</h1>
        <p>
          <RelativeTime time={lastActivity} />
        </p>
      </div>
      <BsCheckCircle className={styles.icon} />
    </div>
  );
}
