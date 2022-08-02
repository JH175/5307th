import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content="The story, timeline, and map of the U.S. Army's 5307th Composite Unit (Provisional) AKA Merrill's Marauders"
        ></meta>
        <meta
          name='keywords'
          content="5307th Composite Unit, Merrill's Marauders, U.S. Army, CBI, China, India, Burma, Galahad, MARS Task Force, Frank D. Merrill, WWII"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
