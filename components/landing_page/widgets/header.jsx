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
                <nav>
                    <Link href="/signin" passHref>
                        Login
                    </Link>
                    <button>
                        <Link href="/signup" passHref>
                            Create Account
                        </Link>
                    </button>
                </nav>
            </header>
        </div>
    )
}

export default header
