import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { useState } from 'react';
function Header() {
  const [active, setActive] = useState(false);
  const checkState = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <div>
      <div className={styles.skip}>
        <Link href="#main-content" passHref>
          skip navigation
        </Link>
      </div>
      <header className={`${active ? styles.mobActNav : styles.header}`}>
        <Link href="/" passHref>
          <span className={styles.logo}>BufferOverflow</span>
        </Link>
        <button className={styles.button} onClick={checkState}>button</button>

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
        <div className={`${active ? styles.show : 'hidden'}`}>
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
