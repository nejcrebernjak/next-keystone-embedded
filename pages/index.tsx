import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Import the generated Lists API and types from Keystone
import { query } from ".keystone/api";
import PostListEntry, { IPostList } from "../components/PostListEntry";

interface IPosts {
  posts: Array<IPostList>;
}

const Home: NextPage<IPosts> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Keystone Embedded Template</title>
        <meta name="description" content="Next Keystone Embedded Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/nejcrebernjak/next-keystone-embedded">
            next-keystone-embedded
          </a>{" "}
          template!
        </h1>

        <div className={styles.grid}>
          {posts && posts.length ? (
            <>
              {posts.map((post) => (
                <PostListEntry key={post.id} {...post} />
              ))}
            </>
          ) : (
            <p className={styles.description}>
              You have no posts yet. 😏 <br />
              Visit <a href="http://localhost:8000">Admin Panel</a> and create
              some!
            </p>
          )}
        </div>
      </main>
      <footer>
        <p className={styles.description}>
          Visit <a href="http://localhost:8000">Admin Panel</a> and{" "}
          <a href="http://localhost:8000/api/graphql">GraphQL</a>.
        </p>
      </footer>
    </div>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<IPosts>> {
  const posts = (await query.Post.findMany({
    query: "id title slug summary",
  })) as IPostList[];
  return {
    props: {
      posts,
    },
  };
}

export default Home;
