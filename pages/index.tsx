import styles from '../styles/Home.module.scss'
import Header from '../components/landing_page/widgets/header'
import Main from '../components/landing_page/screen/main'
import Feature from '../components/landing_page/screen/feature'
import Sample from '../components/landing_page/screen/sample'
import Footer from '../components/landing_page/widgets/footer'
import { useEffect } from 'react'
import { useAuth } from '../context/authUserContext'
import { useRouter } from 'next/router'
export default function LandingPage() {

  const {User, loading} = useAuth();
  const router = useRouter();

  // Listen to changes on loading and authUser
  // useEffect(()=>{
  //   // If user is logged in, redirect to /home page
  //   if(loading && User){
  //     router.push('/home');
  //   }
  // }, [User, loading, router]);

  // Landing page
  return (
    <div className={styles.container}>


      {/* Why main??
        * Because it's the first screen of our landing page.
        *
        * The Header is the navigation panel.
        * The Main is the main content of the page. i.e title, description, etc.
      */}
      <main className={styles.main}>
        <Header />
        <Main />
      </main>


      <Feature />
      <Sample />
      <Footer />
    </div>
  );
}
