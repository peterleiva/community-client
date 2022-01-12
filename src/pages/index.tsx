import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Timeline } from "features/timeline";
import { listThreads, ThreadConnection, useThreads } from "features/threads";
import styles from "styles/Home.module.scss";

type HomeProps = {
  threads: ThreadConnection;
};

export default function Home({ threads }: HomeProps) {
  const { pathname } = useRouter();
  const { data, caughUp, loading, next, error } = useThreads({
    threads,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Community</title>
        <meta name="description" content="community application" />
      </Head>

      <main className={styles.main}>
        <Timeline
          threads={data}
          onReachEnd={next}
          caughUp={caughUp}
          loading={loading}
        />

        {error && (
          <div className="text-center">
            <p className="text-danger text-bold">
              Error Trying load more threads
            </p>
            <p>
              Please{" "}
              <Link href={pathname} passHref>
                <a href="pass">refresh</a>
              </Link>{" "}
              the page. If the problem persist,
              <Link href="/support" passHref>
                <a href="/support"> contact the support team</a>
              </Link>
            </p>
          </div>
        )}
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
