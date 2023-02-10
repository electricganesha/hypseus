import React from "react";
import Image from "next/image";
import styles from "./PostView.module.scss";
import {cleanUpCloudinaryURL , convertToCloudinaryBlurURL} from '../../utils/cloudinary';

const PostView = ({post}) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__container}>
        <Image
          className={styles.post__image}
          placeholder="blur"
          blurDataURL={convertToCloudinaryBlurURL(post.image)}
          src={cleanUpCloudinaryURL(post.image)}
          alt={post.title}
          width={640}
          height={480}
        />
        <h1 className={styles.post__title}>{post.title}</h1>
      </div>

      <div
        className={styles.post__content}
        dangerouslySetInnerHTML={{__html: post.content}}
      />
    </div>
  );
};

export default PostView;
