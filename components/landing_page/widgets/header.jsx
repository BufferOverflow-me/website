import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/Home.module.scss'
function header() {
    return (
        <header className={styles.header}>
                <Link href="/" passHref>
                    <span className={styles.logo}>
                        BufferOverflow
                    </span>
                </Link>
                <nav className={styles.url}>
                    <Link href="/#Overview" passHref>
                        Overview
                    </Link>
                    <Link href="/blog" passHref>
                        Blog
                    </Link>
                    <Link href="/support" passHref>
                        Support
                    </Link>
                </nav>
                <nav>
                    <div className={styles.url}>
                        Login in
                    </div>
                    <div className={styles.signup}>
                        Create Account
                    </div>
                </nav>
        </header>
    )
}

export default header
