import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppBar, Button, SvgIcon, Toolbar, Typography } from '@mui/material';

import { Copyright, Calculator } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Savings Calculator</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon>
            <path d="m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z" />
          </SvgIcon>
          <Typography pl={1} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Savings Calculator
          </Typography>
          <Button size="small" color="inherit">
            <Typography variant="subtitle2">English | SEK</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Calculator />
      <Copyright />
    </>
  );
};

export default Home;
