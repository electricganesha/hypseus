import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import CategoryMenu from '../Menu';
import { slide as Menu } from 'react-burger-menu'

const Navbar = props => {

    const navbarComponent = <div className={styles.navbar}>
        <Link href="/">
            <a className={styles.navbar__item}>Home</a>
        </Link>
        <span className={styles.separator}>/</span>
        <Link href="/blog">
            <a className={styles.navbar__item}>Blog</a>
        </Link>
        <span className={styles.separator}>/</span>
        <Link href="/about">
            <a className={styles.navbar__item}>About</a>
        </Link>
    </div>;

    return (
        <React.Fragment>
            <div className={styles.mobileNav}>
                <Menu>
                    {navbarComponent}
                    <CategoryMenu />
                </Menu>
            </div>
            <div className={styles.desktopNav}>
                {navbarComponent}
            </div>
        </React.Fragment>
    );
};

export default Navbar;
