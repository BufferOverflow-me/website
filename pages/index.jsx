import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/landing_page/widgets/header'
import Main from '../components/landing_page/screen/main'
import Feature from '../components/landing_page/screen/feature'
import Sample from '../components/landing_page/screen/sample'
export default function LandingPage() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Header />
        <Main />
      </main>


      <Feature />
      <Sample />

    </div>
  );
}
