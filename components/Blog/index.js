import React from "react";
import Link from "next/link";
import styles from "./Blog.module.scss";

const About = ({posts}) => {
  return (
    <div className={styles.blog}>
      {posts?.length ? (
        posts.map((post) => (
          <Link
            className={styles.blog__link}
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <a>
              <p>{post.title}</p>
            </a>
          </Link>
        ))
      ) : (
        <p>No blog posts yet...</p>
      )}
    </div>
  );
};

export default About;
