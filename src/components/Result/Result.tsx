import React, { useMemo, useCallback } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useStore } from '../../useStore';
import shallow from 'zustand/shallow';
import { useCalculateGain } from '../../hooks/useCalculateGain';

const formatter = (number: number) =>
  new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 0,
  }).format(number);

export const Result = () => {
  const { totalReturns, totalInvestment, wealthGained } = useCalculateGain();
  return (
    <Container maxWidth="xs">
      <Grid container marginTop={3}>
        <Grid container>
          <Grid item flex="1">
            <Typography fontWeight={300}>Total Invested Amount</Typography>
            <Typography variant="h6">{formatter(totalInvestment)}</Typography>
          </Grid>
          <Grid item>
            <Typography fontWeight={300}>Est. Returns</Typography>
            <Typography variant="h6">{formatter(wealthGained)}</Typography>
          </Grid>
        </Grid>
        <Grid marginTop={2} container justifyContent="center" alignContent="center">
          <Grid item>
            <Typography fontWeight={300}>Total Value</Typography>
            <Typography variant="h6" alignSelf="center">
              {formatter(totalReturns)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
