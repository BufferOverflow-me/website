import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { useState } from 'react';


// Components here,
import DrawerLink from './header_components/link';


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
      <div className=''>
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
            <div className="flex items-center gap-x-5">
              <div className="transition-all duration-700 hover:shadow-lg hover:shadow-[#23e2ce]/50 rounded-lg p-2">
                <Link href="/sign_in" passHref>
                  Login
                </Link>
              </div>
              <div className='bg-gradient-to-l from-[#cec1ce] to-[#23e2ce] shadow-lg shadow-[#23e2ce]/50 text-white text-2xl h-max w-max p-2 rounded-lg 
              transition-all duration-700 ease-linear hover:bg-gradient-to-r'>
                <Link href="/sign_up" passHref>
                  Create Account
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className={`${drawer ? styles.show : 'hidden'}`}>
        <div className={styles.mobnav}>
          <DrawerLink title="Overview" route="/" />
          <DrawerLink title="Blog" route="/blog" />
          <DrawerLink title="Support" route="/Support" />
          <DrawerLink title="Sign In" route="/sign_in" />
          <DrawerLink title="Create an Account" route="/sign_up" />
        </div>
      </div>
    </div>
  );
}

export default Header;
