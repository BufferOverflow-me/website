import '../styles/globals.scss'
import Head from '../components/head'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { AuthUserProvider } from '../context/authUserContext';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      :root {
        --fg: #222222;
        --bg: #fbfbfb;
      }

      [data-theme="dark"] {
        --fg: #fbfbfb;
        --bg: #222222;
      }
`
function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-[#222222] dark:text-[#fbfbfb]">
    <GlobalStyle />
      <Head />
      <AuthUserProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthUserProvider>
    </div>
  );
}

export default MyApp
