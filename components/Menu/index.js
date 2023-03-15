import React from 'react';
import styles from './Menu.module.scss'
import { getBadgeFromType } from '../../utils/badges';

const Menu = ({onChangeCategoryFilter}) => {
    return (
        <div className={styles.menu}>
            <a className={styles.badge} onClick={() => onChangeCategoryFilter('all')}>
                {getBadgeFromType('all')}
            </a>
            <a className={styles.badge} onClick={() => onChangeCategoryFilter('book')}>
                {getBadgeFromType('book')}
            </a>
            <a className={styles.badge} onClick={() => onChangeCategoryFilter('music')}>
                {getBadgeFromType('music')}
            </a>
            <a className={styles.badge} onClick={() => onChangeCategoryFilter('comic')}>
                {getBadgeFromType('comic')}
            </a>
            <a className={styles.badge} onClick={() => onChangeCategoryFilter('game')}>
                {getBadgeFromType('game')}
            </a>
            <a className={styles.badge} onClick={() => onChangeCategoryFilter('movie')}>
                {getBadgeFromType('movie')}
            </a>
        </div>
    );
};

export default Menu;
