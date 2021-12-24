import React from 'react'
import styles from '../../../styles/Home.module.scss'
function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.Container}>
                <div className={styles.leftdiv}>

                </div>
                <div className={styles.row}>
                    <div className={styles.col}>

                    </div>
                    <div className={styles.col}>

                    </div>
                    <div className={styles.col}>

                    </div>
                    <div className={styles.col}>

                    </div>
                </div>
            </div>

            <hr />
            <a
                href="https://BufferOverflow.me"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.logo}>
                © BufferOverflow 2021 | All rights reserved
                </span>
            </a>
        </footer>
    );
}

export default footer;
