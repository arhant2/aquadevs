import { Fragment } from 'react';
import Head from 'next/head';

const Main = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Aquadevs</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='description'
          content="A community to help learn DSA and contribute towards each other's growth. No more mugging of solutions, now build intuitions for everything."
        />
      </Head>

      {props.children}
    </Fragment>
  );
};

export default Main;
