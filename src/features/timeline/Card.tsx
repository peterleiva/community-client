import Link from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import type { Thread } from "types";
import { RelativeTime, NumberFormatCompact, Thumbnail } from "components";
import VoteButton from "./VoteButton";
import ParticipantsList from "./ParticipantsList";
import styles from "./Card.module.scss";

type ThreadProps = Thread;

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

            <ParticipantsList participants={participants} />
          </div>
        </footer>
      </div>
    </article>
  );
}
