import Head from "next/head";
import styles from "styles/Home.module.css";
import { useState } from "react";

import ThreadCard from "components/thread-card";
import { Thread } from "types";

export default function Home() {
  const [state, setState] = useState(0);

  const threads: Thread[] = [
    {
      id: "1",
      title: "Título",
      activity: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      participants: [],
      replies: 1,
      op: {
        id: "id",
        message: "alow",
        author: {
          id: "id",
          username: "carolalels",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    {
      id: "2",
      title: "Título",
      activity: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      participants: [],
      replies: 1,
      op: {
        id: "id",
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error deserunt at debitis non rem nobis ex inventore! Quidem accusantium ullam pariatur amet, iste voluptates. Quaerat impedit facere officiis nam libero.",
        author: {
          id: "id",
          username: "carolalels",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Community</title>
        <meta name="description" content="community application" />
      </Head>

      <main className={styles.main}>
        {threads.map(thread => (
          <ThreadCard key={thread.id} {...thread} />
        ))}
      </main>
    </div>
  );
}
