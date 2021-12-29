import '../styles/globals.scss'
import Head from '../components/head'

import { AuthUserProvider } from '../context/authUserContext';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';
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
function MyApp({ Component, pageProps }:AppProps): JSX.Element {
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
