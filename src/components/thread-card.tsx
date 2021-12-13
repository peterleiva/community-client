import React from "react";
import { Thread as IThread } from "types";
import Avatar from "./avatar";
import ThreadParticipantsCard from "./thread-participants-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./thread-card.module.scss";

type ThreadProps = IThread;

export default function ThreadCard({
  title,
  op,
  replies,
  activity,
  participants,
}: ThreadProps) {
  console.log("styles", styles);
  return (
    <article className={styles.card}>
      <div className={styles.interaction}>
        <button>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        {replies}
        <button>
          <FontAwesomeIcon icon={faChevronDown} size="sm" />
        </button>
      </div>
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
          <div className={styles.author}>
            <Avatar {...op.author} />
            Posted by
            <span className={styles.username}> {op.author.username}</span>
          </div>
        </header>

        <section className="card-content">
          <p>{op.message}</p>
        </section>

        <footer>
          <span>
            Last Activity <time>{activity.toDateString()}</time>
          </span>
          <span>{replies}</span>
          <ThreadParticipantsCard participants={participants} />
        </footer>
      </div>
    </article>
  );
}
