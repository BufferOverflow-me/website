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
                    <Link href="/sign_in" passHref>
                        Login
                    </Link>
                    <button>
                        <Link href="/sign_up" passHref>
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
