import React from 'react'
import styles from '../../../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.Container}>
                <div className={styles.leftdiv}>
                    <h1>BufferOverflow</h1>
                    <p>Develop application or wordpress themese in just few clicks.</p>
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={['fab','facebook']}/></li>
                            <li><FontAwesomeIcon icon={['fab','instagram']}/></li>
                            <li><FontAwesomeIcon icon={['fab','github']}/></li>
                            <li><FontAwesomeIcon icon={['fab','twitter']}/></li>
                            <li><FontAwesomeIcon icon={['fab','youtube']}/></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <ul>
                    <h3>PRODUCT</h3>
                            <li>Coding</li>
                            <li>Prototyping</li>
                            <li>Knowledge Sharing</li>
                            <li>FeedBack</li>
                            <li>What’s New </li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                    <ul>
                    <h3>COMPANY</h3>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>Write On BufferOverflow</li>
                            <li>Refer & Earn</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                    <ul>
                    <h3>LEGAL</h3>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                    <ul>
                    <h3>SUPPORT</h3>
                            <li>Contact Us</li>
                        </ul>
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
