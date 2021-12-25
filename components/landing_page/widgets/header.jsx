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
      <header className={drawer ?  styles.mobActNav : styles.header}>
        <Link href="/" passHref>
          <span className={styles.logo}>BufferOverflow</span>
        </Link>
        <button className={"button text-2xl text-black dark:text-white lg:hidden absolute top-6 right-5 "} onClick={checkState}><i className="fa fa-bars"></i></button>
<div className={`${drawer ? styles.show : 'hidden'}`}>
          <div className={styles.mobnav}>
            <Link href="/" >
              <a className="m-2 hover:text-violet-400">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="m-2 hover:text-violet-400">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="m-2 hover:text-violet-400">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="m-2 hover:text-violet-400">
                Contact us
              </a>
            </Link>
          </div>
          </div>
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



    </div>
  );
}

export default Header;
