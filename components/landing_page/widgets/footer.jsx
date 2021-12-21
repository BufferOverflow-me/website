import React from 'react'
import styles from '../../../styles/Home.module.scss'
function footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://BufferOverflow.me"
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* Powered by{' '} */}
                <span className={styles.logo}>
                © BufferOverflow 2021 | All rights reserved
                </span>
            </a>
        </footer>
    );
}

export default footer;
