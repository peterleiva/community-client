import Head from "next/head";
import type { GetServerSideProps } from "next";
import { Timeline } from "features/timeline";
import {
  listThreads,
  ThreadConnection,
  mapper,
  useThreads,
} from "features/threads";
import styles from "styles/Home.module.scss";

type HomeProps = {
  initialData: ThreadConnection;
};

export default function Home({ initialData }: HomeProps) {
  const { loading, caughUp, data, nextPage, error } = useThreads({
    startCursor: initialData.pageInfo.endCursor,
  });

  const threads = mapper({ threads: initialData }).concat(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Community</title>
        <meta name="description" content="community application" />
      </Head>

      <main className={styles.main}>
        <Timeline
          threads={threads}
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
      props: { initialData: data },
    };
  } catch (err) {
    console.error(err);

    return {
      notFound: true,
    };
  }
};
