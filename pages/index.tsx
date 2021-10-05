import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppBar, SvgIcon, Toolbar, Typography } from '@mui/material';

import { Copyright, Calculator } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monthly Invesment Calculator</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon>
            <path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
          </SvgIcon>
          <Typography pl={1} variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
