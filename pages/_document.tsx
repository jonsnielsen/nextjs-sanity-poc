import { ServerStyleSheet } from 'styled-components';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import WebFonts from 'src/styles/WebFonts';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="/static/fonts/GT-Walsheim-Regular.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
          />
          <link
            href="/static/fonts/GT-Walsheim-Medium.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
          />
          <link
            href="/static/fonts/GT-Walsheim-Bold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
          />
          <WebFonts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
