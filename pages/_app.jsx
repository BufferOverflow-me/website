import '../styles/globals.scss'
import Head from '../components/head'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../styles/globals.scss';
import { CssBaseline } from '@nextui-org/react';
import { AuthUserProvider } from '../context/authUserContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <AuthUserProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}

export default MyApp
