import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Shop</title>
                <meta name="description" content="Best pizza shop located in los angeles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* NAVBAR */}
            <nav className={styles.navbar}>
                <ul className={styles.navbarContactBox}>
                    <Link href="/">
                    <a>
                        <div className={styles.brandPizza}>
                        <img src="/assets/img/pizza_line.png" alt="brand"/>
                        <p className={styles.pizzaName}>Pizza Shop</p>
                        </div>
                    </a>
                    </Link>

                    <Link href="/">
                    <a>
                        <li className={styles.navbarContact}>🏡 Home</li>
                    </a>
                    </Link>
                    <Link href="/about">
                    <a>
                        <li className={styles.navbarContact}>😎 About</li>
                    </a>
                    </Link>
                </ul>
            </nav>

            <main className={styles.main}>
                {children}
            </main>

            {/* FOOTER */}
            <footer className={styles.footer}>Made with {'💖'} by Infinity Code LLC</footer>
            
        </div>
    )
};
