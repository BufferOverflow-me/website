import '../styles/globals.scss'
import Layout from '../components/landing_page/layout'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
