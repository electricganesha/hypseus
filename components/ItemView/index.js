import React from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./ItemView.module.scss";
import {cleanUpCloudinaryURL , convertToCloudinaryBlurURL} from '../../utils/cloudinary';
import {getAuthorBlurb} from '../../utils/content';

const ItemView = ({item}) => {
  const name = item.the ?  `${item.the && "The "}${item.name}` : item.name;
  const authorBlurb = getAuthorBlurb(item.type);
  return (
    <div className={styles.item}>
      <div className={styles.item__container}>
        <Image
          className={styles.item__image}
          placeholder="blur"
          blurDataURL={convertToCloudinaryBlurURL(item.image)}
          src={cleanUpCloudinaryURL(item.image)}
          alt={name}
          width={640}
          height={480}
        />
        <h1 className={styles.item__title}>{name}</h1>
        <p className={styles.item__creator}>{`${authorBlurb} ${item.artist} in ${item.year}`}</p>
        <p className={styles.item__buy}>{item.affiliate ? <Link href={item.affiliate}><a>Buy {name} now on Amazon</a></Link> : null}</p>
      </div>
      <div
        className={styles.item__content}
        dangerouslySetInnerHTML={{__html: item.description}}
      />
        {item.articles 
            ? <div className={styles.item__articles}>
                <h3>Related articles:</h3>
                <ul>
                    {item.articles.map(article => <li key={article.link}>
                        <Link  href={`/blog/${article.link}`}><a>{article.name}</a></Link>
                        </li>
                    )}
                </ul>
            </div> 
            : null}
    </div>  
  );
};

export default ItemView;
