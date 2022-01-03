import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { useState } from 'react';
import { useAuth } from '../../../context/authUserContext';
// Components here,
import DrawerLink from './header_components/link';
import UserImage from '../../../components/auth/widgets/userImage';
import AuthButton from '../../auth/widgets/auth_buttons';


function Header() {
  const [drawer, setDrawer] = useState(false);
  const checkState = () => {
    setDrawer(!drawer);
  };
  // Profile section hooks
  const { User, loggedIn } = useAuth();


  const profileSection = () => {
    // If user is logged in, show the profile section
    if (loggedIn) {
      return (
        <>
          <div>
            <UserImage src={User.photoUrl}/>
          </div>
        </>
      )
    }
    // If user is not logged in, show the login section
    return (
     <AuthButton />
    );
  }
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
              'button text-2xl h-auto lg:hidden absolute top-6 right-8 '
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
            {profileSection()}
          </nav>
        </header>
      </div>
      {/* Navbar for small and medium sized devices */}

      {/* Issue: Idk why text colors are getting over rided! */}
      <div className='lg:hidden bg-[#b7dbf0]'>
        <div className={`${drawer ? 'visible' : 'hidden'}`}>
          <div className='mt-4 ml-1.5 flex flex-col flex-wrap items-start justify-between'>
            <DrawerLink title="Overview" route="/" />
            <DrawerLink title="Blog" route="/blog" />
            <DrawerLink title="Support" route="/Support" />
            <DrawerLink title="Sign In" route="/sign_in" />
            <DrawerLink title="Create an Account" route="/sign_up" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
