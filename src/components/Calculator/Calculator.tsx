import React from 'react';
import { Container, Grid } from '@mui/material';
import { Result, SliderInput, PieChart } from '..';

export const Calculator = () => {
  return (
    <Container maxWidth="md">
      <Grid container pt={4} spacing={4}>
        <Grid item flex="1" md={8} xs={12} sm={8}>
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
        <Grid item md={4} xs={12} sm={4}>
          <PieChart />
        </Grid>
      </Grid>
      <Result />
    </Container>
  );
};
