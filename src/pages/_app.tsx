import App, { AppInitialProps, AppProps, AppContext } from 'next/app';
import { NextComponentType } from 'next';
import Layout from 'src/components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'src/styles';
// import { I18nProvider } from 'src/lib/i18n';
import { Region, RegionId, regionsById } from 'src/data/region';
import getReduxStore, { RootState, InitialState } from 'src/store';
import { Provider as ReduxProvider } from 'react-redux';
import { Language, LanguageId } from 'src/data/language';
import { useState } from 'react';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
  router,
  // @ts-ignore
  // reduxStore,
}) => {
  const [reduxStore] = useState(() => {
    const regionId = router.locale as RegionId;
    const languageId = regionsById[regionId].languageIds[0];

    const initialReduxState: InitialState = {
      settings: { languageId, regionId },
    };

    return getReduxStore(initialReduxState);
  });

  console.log('change in app');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReduxProvider store={reduxStore}>
        <Layout>
          {/* the key is needed for AnimatePresense to work */}
          <Component {...pageProps} key={router.pathname} />
        </Layout>
      </ReduxProvider>
    </ThemeProvider>
  );
};

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { router } = appContext;
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   console.log('getInitialProps run');
//   const regionId = getRegionIdFromPath(router.asPath);
//   console.log({ routerThing: router.asPath });
//   console.log('regionIdFrom Path: ', regionId);

//   const initialReduxState: InitialState = {
//     settings: { languageId: LanguageId.Da, regionId: RegionId.Dk },
//   };
//   const reduxStore = getReduxStore(initialReduxState);

//   return { reduxStore, ...appProps };
// };

export default MyApp;
