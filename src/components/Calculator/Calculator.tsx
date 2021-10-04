import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Result, SliderInput } from '..';

export const Calculator = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item flex="1">
          <SliderInput
            label="Monthly Savings"
            endAdornment="kr"
            max={100000}
            step={500}
            fieldName="investedAmount"
          />
          <SliderInput fieldName="expectedReturn" label="Expected Return Rate" endAdornment="%" />
          <SliderInput
            fieldName="timePeriod"
            label="Time Period"
            endAdornment="Yrs"
            min={1}
            max={50}
          />
        </Grid>
      </Grid>
      <Result />
    </Container>
  );
};
