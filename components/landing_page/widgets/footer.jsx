import React from 'react'
import styles from '../../../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';
function footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.Container}>
                <div className={styles.leftdiv}>
                    <h1>BufferOverflow</h1>
                    <p>Develop application or wordpress themese in just few clicks.</p>
                    <div>
                        <ul>
                            {/* <li><FontAwesomeIcon icon={['fab','facebook']}/></li> */}
                            <li>
                                <a href="http://">

                                    <i className="fab fa-twitter" alt='Twitter'
                                title='Follow us on twitter'></i>
                                    {/* <Image
                                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                                width={30}
                                height={30}

                            /> */}
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                <i className="fab fa-facebook" alt='Facebook'
                                title='Follow us on facebook'></i>
                                   {/* <Image
                                src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                                width={30}
                                height={30}

                            /> */}
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                <i className="fab fa-instagram" alt='Instagram'
                                title='Follow us on instagram'></i>
                                    {/* <Image
                                src="https://img.icons8.com/material/48/ffffff/github.png"
                                width={30}
                                height={30}

                            /> */}
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                <i className="fab fa-github" alt='GitHub'
                                title='Follow us on github'></i>
                                    {/* <Image
                                src="https://img.icons8.com/material/48/ffffff/twitter-squared.png"
                                width={30}
                                height={30}

                            /> */}
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                <i className="fab fa-youtube" alt='YouTube'
                                title='Subscribe us on YouTube'></i>
                                    {/* <Image
                                src="https://img.icons8.com/material/48/ffffff/youtube-play--v1.png"
                                width={30}
                                height={30}

                            /> */}
                                </a>
                            </li>
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
                            <li>Feedback</li>
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
