import '../styles/globals.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} route={router.route} />;
      </AnimatePresence>
    </>
  );
}

export default MyApp;
