import '../styles/globals.scss'
import Head from '../components/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab,faCoffee)
import '../styles/globals.scss';
import {AuthUserProvider} from '../context/authUserContext';
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
