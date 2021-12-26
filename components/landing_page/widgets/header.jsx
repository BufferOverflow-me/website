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
      <header className={styles.header}>
        <Link href="/" passHref>
          <span className={styles.logo}>BufferOverflow</span>
        </Link>
        <button
          className={
            'button text-2xl text-black dark:text-white h-auto lg:hidden absolute top-6 right-8 '
          }
          onClick={checkState}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
        </button>

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
      </header>
      <div className={`${drawer ? styles.show : 'hidden'}`}>
          <div className={styles.mobnav}>
            <Link href="/">
              <a className="m-2 w-max hover:text-violet-400 font-light text-lg text-white h-auto">
                Overview
              </a>
            </Link>
            <Link href="/">
              <a className="m-2 w-max hover:text-violet-400 font-light text-lg text-white h-auto">
                Blog
              </a>
            </Link>
            <Link href="/">
              <a className="m-2 w-max hover:text-violet-400 font-light text-lg text-white h-auto">
                Support
              </a>
            </Link>
            <Link href="/">
              <a className="m-2 w-max hover:text-violet-400 font-light text-lg text-white h-auto">
                Sign in
              </a>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Header;
