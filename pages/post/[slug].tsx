import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";

import { query } from ".keystone/api";

interface IPost {
  id: string;
  title: string;
  summary: string;
  content: string;
}

export default function PostPage({ post }: { post: IPost }) {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <div>
          <Link href="/">
            <a>&larr; back home</a>
          </Link>
        </div>
        <h1>{post.title}</h1>
        <p style={{ fontSize: "1.5rem" }}>{post.summary}</p>
        <p>{post.content}</p>
      </main>
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = (await query.Post.findMany({
    query: `slug`,
  })) as { slug: string }[];

  const paths = posts
    .filter(({ slug }) => !!slug)
    .map(({ slug }) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = (await query.Post.findOne({
    where: { slug: params!.slug as string },
    query: "id title summary content",
  })) as IPost | null;
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}
