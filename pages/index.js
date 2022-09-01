import Head from 'next/head';
import { Fragment } from 'react';
import Home from '../components/Home/Home';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Aquadevs</title>
        <meta name='description' content='Learn to think' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
        />
      </Head>
      <Home />
    </Fragment>
  );
};

export default HomePage;
