import Head from "next/head";
import type { GetServerSideProps } from "next";
import type { ThreadConnection } from "lib";
import { Timeline } from "features/timeline";
import useThreads, { mapper } from "hooks/use-threads";
import { getThreads } from "hooks/get-threads";
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
  const { data, error } = await getThreads();

  return {
    props: { initialData: data },
    notFound: !!error,
  };
};
