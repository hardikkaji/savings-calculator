import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { Copyright, Calculator } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monthly Invesment Calculator</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Monthly Invesment Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Calculator />
      <Copyright />
    </>
  );
};

export default Home;
