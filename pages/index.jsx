import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/landing_page/widgets/header'
import Main from '../components/landing_page/screen/main'
import Feature from '../components/landing_page/screen/feature'
import Sample from '../components/landing_page/screen/sample'
export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BufferOverflow</title>
        <meta name="description" content="Sass Service creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Header />
        <Main />
      </main>


      <Feature />
      <Sample />

    </div>
  );
}
