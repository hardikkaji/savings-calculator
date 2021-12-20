import React from 'react';
import { Container, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

import { Result, SliderInput, PieChart } from '..';

export const Calculator = () => {
  const { t } = useTranslation('home');
  return (
    <Container maxWidth="md">
      <Grid container pt={4} spacing={4}>
        <Grid item flex="1" md={6} xs={12} sm={6}>
          <SliderInput
            label={t('startingAmount')}
            endAdornment="kr"
            max={1000000}
            step={500}
            fieldName="startingAmount"
          />
          <SliderInput
            label={t('investmentPerMonth')}
            endAdornment="kr"
            max={100000}
            step={500}
            fieldName="investedAmount"
          />
          <SliderInput fieldName="expectedReturn" label={t('expectedReturn')} endAdornment="%" />
          <SliderInput
            fieldName="timePeriod"
            label={t('timePeriod')}
            endAdornment="Yrs"
            min={1}
            max={50}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <PieChart />
        </Grid>
      </Grid>
      <Result />
    </Container>
  );
};
