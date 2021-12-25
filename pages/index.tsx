import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Copyright, Calculator, Header } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Savings Calculator</title>
      </Head>
      <Header />
      <Calculator />
      <Copyright />
    </>
  );
};

export default Home;
