import Link from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { Thread as IThread } from "types";
import Thumbnail from "./Thumbnail";
import VoteButton from "./VoteButton";
import ThreadParticipantsCard from "./ThreadParticipantsCard";
import RelativeTime from "./RelativeTime";
import NumberFormatCompact from "./NumberFormatCompact";
import styles from "./ThreadCard.module.scss";

type ThreadProps = IThread;

export default function ThreadCard({
  id,
  title,
  post,
  replies,
  activity,
  participants,
}: ThreadProps) {
  return (
    <article className={styles.card}>
      <div className={styles.interaction}>
        <VoteButton votes={post.likes} />
      </div>
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
          <div className={styles.author}>
            <Thumbnail user={post.author} />
            Posted by
            <b className={styles.username}> {post.author.username}</b>
          </div>
        </header>

        <section className={styles.content}>
          <p>{post.message}</p>
        </section>

        <footer>
          <span className={styles.activity}>
            Last Activity <RelativeTime time={activity} />
          </span>
          <div className={styles.participants}>
            <Link href={`/thread/${id}#replies`} passHref>
              <a href="dummy">
                <NumberFormatCompact value={replies} />
                <FaRegComment className={styles.icon} />
              </a>
            </Link>

            <ThreadParticipantsCard participants={participants} />
          </div>
        </footer>
      </div>
    </article>
  );
}
