import React from 'react';
import styles from './ItemsGrid.module.scss'
import ItemCard from '../ItemCard';
import Link from 'next/link';

const ItemsGrid = props => {
    if (!props.data) {
        return null;
    }

    return (
        <div className={styles.content}>
            <div className={styles.grid}>
            {
                props.data.map(item => <Link key={item.slug} href={`/items/${item.slug}`}><a><ItemCard item={item} /></a></Link>)
            }
            </div>
        </div>
    );
};

export default ItemsGrid;
