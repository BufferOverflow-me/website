import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/Home.module.scss'
function header() {
    return (
        <div>
             <div className={styles.skip}>
                <Link href="#main-content" passHref>
                    skip navigation
                </Link>
            </div>
            <header className={styles.header}>
                {/* <nav className={styles.nav}>
                    <button className={styles.nav_toggle}>
                        <span className={styles.hamburger}></span>
                    </button>
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="#">
                                link
                            </a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="#">
                                link
                            </a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="#">
                                link
                            </a>
                        </li>
                    </ul>
                </nav > */}
                <Link href="/" passHref>
                    <span className={styles.logo}>
                        BufferOverflow
                    </span>
                </Link>
                <nav className={styles.mid}>
                    <Link href="#Overview" passHref>
                        Overview
                    </Link>
                    <Link href="/blog" passHref>
                        Blog
                    </Link>
                    <Link href="/support" passHref>
                        Support
                    </Link>
                </nav>
                <nav className={styles.right_nav}>
                    <Link href="/signin" passHref>
                        Login
                    </Link>
                    <button>
                        <Link href="/signup" passHref>
                            Create Account
                        </Link>
                    </button>
                </nav>
                <div className={styles.button}>

                </div>
            </header>
        </div>
    )
}

export default header
