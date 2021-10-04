import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { PieChart as PChart } from 'react-minimal-pie-chart';
import { useCalculateGain } from '../../hooks/useCalculateGain';
import { Box } from '@mui/system';

export const PieChart = () => {
  const { totalInvestment, wealthGained } = useCalculateGain();
  const theme = useTheme();
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item mr={1}>
          <Box sx={{ width: 25, height: 10, backgroundColor: theme.palette.primary.main }} />
        </Grid>
        <Grid item mr={1}>
          <Typography variant="subtitle2">Total Investment</Typography>
        </Grid>
        <Grid item mr={1}>
          <Box sx={{ width: 25, height: 10, backgroundColor: theme.palette.warning.dark }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Est. Returns</Typography>
        </Grid>
      </Grid>
      <PChart
        animate
        lineWidth={30}
        paddingAngle={2}
        data={[
          { title: 'Total Investment', value: totalInvestment, color: theme.palette.primary.main },
          { title: 'Est. Returns', value: wealthGained, color: theme.palette.warning.dark },
        ]}
      />
    </>
  );
};
