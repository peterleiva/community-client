import React from "react";
import { Thread as IThread } from "types";
import Avatar from "./Avatar";
import VoteButton from "./VoteButton";
import ThreadParticipantsCard from "./ThreadParticipantsCard";
import styles from "./ThreadCard.module.scss";

type ThreadProps = IThread;

export default function ThreadCard({
  title,
  op,
  replies,
  activity,
  participants,
}: ThreadProps) {
  return (
    <article className={styles.card}>
      <div className={styles.interaction}>
        <VoteButton votes={replies} />
      </div>
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
          <div className={styles.author}>
            <Avatar {...op.author} />
            Posted by
            <b className={styles.username}> {op.author.username}</b>
          </div>
        </header>

        <section className={styles.content}>
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
