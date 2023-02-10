import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ItemCard.module.scss";
import {getBadgeFromType} from "../../utils/badges";
import {
  cleanUpCloudinaryURL,
  convertToCloudinaryBlurURL,
} from "../../utils/cloudinary";

const ItemCard = ({index, item}) => {
  const article = (
    <article className={styles.item} key={index}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.item__image}
          src={cleanUpCloudinaryURL(item.image)}
          placeholder="blur"
          blurDataURL={convertToCloudinaryBlurURL(item.image)}
          alt={item.title}
          width={300}
          height={300}
        />
        <div className={styles.badge}>{getBadgeFromType(item.type)}</div>
      </div>
      <p>
        {item.the && "The "}
        {item.name}
      </p>
      <p className={styles.artist}>
        {item.artist},&nbsp;{item.year}
      </p>
    </article>
  );
  return item.blog ? (
    <Link href={`/blog/${item.blog}`}>
      <a>{article}</a>
    </Link>
  ) : (
    <>{article}</>
  );
};

export default ItemCard;
