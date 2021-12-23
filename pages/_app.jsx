import '../styles/globals.scss';
import Head from '../components/head';
import {AuthUserProvider} from '../utils/context/authUserContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <AuthUserProvider>
      <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}

export default MyApp
