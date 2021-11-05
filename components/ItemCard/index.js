import React from 'react';
import styles from './ItemCard.module.scss';
import { getBadgeFromType } from '../../utils/badges';

const ItemCard = ({ index, item }) => {
    return (
        <article className={styles.item} key={index}>
            <div
                style={{
                    backgroundImage: 'url(' + item.image + ')',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "300px",
                    width: "300px",
                    color: "#f5f5f5"
                }}
            >
                <div className={styles.badge}>
                    {getBadgeFromType(item.type)}
                </div>
            </div>

            <p>{item.the && "The "}{item.name}</p>
            <p className={styles.artist}>
                {item.artist},&nbsp;{item.year}
            </p>
        </article>
    );
};

export default ItemCard;


