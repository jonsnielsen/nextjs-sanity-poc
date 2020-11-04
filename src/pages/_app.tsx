import type { AppProps } from 'next/app';
import Layout from 'src/components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'src/styles';
import { I18nProvider } from 'src/lib/i18n';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <I18nProvider> */}
      <Layout>
        {/* the key is needed for AnimatePresense to work */}
        <Component {...pageProps} key={router.pathname} />
      </Layout>
      {/* </I18nProvider> */}
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
