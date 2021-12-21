import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Timeline } from "features/timeline";
import { ThreadMapper, ThreadConnection, createApolloClient } from "lib";
import styles from "styles/Home.module.scss";
import { gql } from "@apollo/client";

type HomeProps = {
  data: ThreadConnection;
};

export default function Home({ data }: { data: ThreadConnection }) {
  const mapper = new ThreadMapper();
  const threads = data.edges.map(({ node }) => mapper.toObject(node)) ?? [];

  return (
    <div className={styles.container}>
      <Head>
        <title>Community</title>
        <meta name="description" content="community application" />
      </Head>

      <main className={styles.main}>
        <Timeline threads={threads} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const client = createApolloClient();
  const { data, error } = await client.query<{
    threads: ThreadConnection;
  }>({
    query: GET_THREADS,
  });

  return {
    props: { data: data.threads },
    notFound: !!error,
  };
};

const GET_THREADS = gql`
  query GetThreads {
    threads {
      edges {
        node {
          id
          title
          lastActivity
          replies

          participants {
            edges {
              node {
                id
                avatar
              }
            }
            interactions
          }

          post {
            id
            message
            likes

            author {
              id
              avatar
              name {
                nick
              }
            }
          }
        }
      }
    }
  }
`;
