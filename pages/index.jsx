import styles from '../styles/Home.module.scss'
import Header from '../components/landing_page/widgets/header'
import Main from '../components/landing_page/screen/main'
import Feature from '../components/landing_page/screen/feature'
import Sample from '../components/landing_page/screen/sample'
import Footer from '../components/landing_page/widgets/footer'

export default function LandingPage() {
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
