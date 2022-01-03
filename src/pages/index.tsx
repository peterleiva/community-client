import Head from "next/head";
import type { GetServerSideProps } from "next";
import { Timeline } from "features/timeline";
import { listThreads, ThreadConnection, useThreads } from "features/threads";
import styles from "styles/Home.module.scss";

type HomeProps = {
  threads: ThreadConnection;
};

export default function Home({ threads }: HomeProps) {
  const { loading, caughUp, data, nextPage } = useThreads({ threads });

  return (
    <div className={styles.container}>
      <Head>
        <title>Community</title>
        <meta name="description" content="community application" />
      </Head>

      <main className={styles.main}>
        <Timeline
          threads={data}
          loading={loading}
          caughUp={caughUp}
          onNextPage={nextPage}
        />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const data = await listThreads();

    return {
      props: { threads: data },
    };
  } catch (err) {
    console.error(err);

    return {
      notFound: true,
    };
  }
};
