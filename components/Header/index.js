import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import {useRouter} from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.header}>
          <Link href="/">
            <a>
              <span>HYPSEUS</span>
              <Image
                src="/hypseus/icons/hexagram22.png"
                alt="Hexagram 22 - Grace"
                width="48"
                height="48"
              />
              <span className={styles.header__subtitle}>
                &Upsilon;&Psi;&Epsilon;&Nu;&Sigma;
              </span>
            </a>
          </Link>
        </h1>
        <h3 className={styles.subheader}>
          A curated selection of sublime works
        </h3>
        {router.asPath === "/" ? (
          <div className={styles.quote}>
            <q>
              Sublimity refers to a certain type of elevated language that
              strikes its listener with the mighty and irresistible power of a
              thunderbolt. A sublime passage can be heard again and again with
              equal pleasure.
            </q>
            <span>
              &mdash; Longinus - &Pi;&epsilon;&rho;ὶ
              ὕ&psi;&omicron;&upsilon;&sigmaf; (On the Sublime)
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
