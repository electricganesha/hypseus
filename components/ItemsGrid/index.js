import React from 'react';
import styles from './ItemsGrid.module.scss'
import ItemCard from '../ItemCard';

const ItemsGrid = props => {
    return (
        <div className={styles.content}>
            <div className={styles.grid}>
            {
                props.data.map((item, index) => <ItemCard key={index} item={item} />)
            }
            </div>
        </div>
    );
};

export default ItemsGrid;
