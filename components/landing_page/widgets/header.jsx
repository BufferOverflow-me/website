import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


function Header() {
  const [drawer, setDrawer] = useState(false);
  const checkState = () => {
    setDrawer(!drawer);
  };

  return (
    <div>
      <div className={styles.skip}>
        <Link href="#main-content" passHref>
          skip navigation
        </Link>
      </div>
      <header className={`${drawer ? styles.mobActNav : styles.header}`}>
        <Link href="/" passHref>
          <span className={styles.logo}>BufferOverflow</span>
        </Link>
        <button className={styles.button} onClick={checkState}><i className="fa fa-bars"></i></button>

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
        <div className={`${drawer ? styles.show : 'hidden'}`}>
          <div className={styles.mobnav}>
            <Link href="/">
              <a >
                Home
              </a>
            </Link>
            <Link href="/">
              <a >
                Services
              </a>
            </Link>
            <Link href="/">
              <a >
                About us
              </a>
            </Link>
            <Link href="/">
              <a >
                Contact us
              </a>
            </Link>
          </div>
          </div>
      </header>



    </div>
  );
}

export default Header;
