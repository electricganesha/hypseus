import React from 'react';
import styles from './Footer.module.scss';
import Link from "next/link";

const Footer = props => {
    return (
        <p className={styles.footer}>
            Curated by <Link href="https://www.christianmarques.com"><a>Christian Marques</a></Link>, {new Date().getFullYear()}
        </p>
    );
};

export default Footer;
