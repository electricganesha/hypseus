import React from 'react';
import styles from './Menu.module.scss'
import { getBadgeFromType } from '../../utils/badges';

import Link from 'next/link';

const Menu = props => {
    return (
        <div className={styles.menu}>
            <Link href="/">
                <a className={styles.badge} >
                    {getBadgeFromType('all')}
                </a>
            </Link>
            <Link href="/?category=book">
                <a className={styles.badge} >
                    {getBadgeFromType('book')}
                </a>
            </Link>
            <Link href="/?category=music">
                <a className={styles.badge}>
                    {getBadgeFromType('music')}
                </a>
            </Link>
            <Link href="/?category=comic">
                <a className={styles.badge}>
                    {getBadgeFromType('comic')}
                </a>
            </Link>
            <Link href="/?category=game">
                <a className={styles.badge}>
                    {getBadgeFromType('game')}
                </a>
            </Link>
            <Link href="/?category=movie">
                <a className={styles.badge}>
                    {getBadgeFromType('movie')}
                </a>
            </Link>
        </div>
    );
};

export default Menu;
