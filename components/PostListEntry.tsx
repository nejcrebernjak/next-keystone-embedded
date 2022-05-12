import Link from "next/link";
import React, { FunctionComponent } from "react";
import styles from "../styles/Home.module.css";

export interface IPostList {
  id: string;
  title: string;
  slug: string;
  summary: string;
}

const PostListEntry: FunctionComponent<IPostList> = ({
  title,
  slug,
  summary,
}) => {
  return (
    <Link href={`/post/${slug}`}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default PostListEntry;
