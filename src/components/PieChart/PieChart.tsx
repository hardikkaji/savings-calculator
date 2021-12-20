import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { PieChart as PChart } from 'react-minimal-pie-chart';
import { Box } from '@mui/system';
import useTranslation from 'next-translate/useTranslation';

import { useCalculateGain } from '../../hooks';

export const PieChart = () => {
  const { totalInvestment, wealthGained } = useCalculateGain();
  const { t } = useTranslation('home');
  const theme = useTheme();
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item mr={1}>
          <Box sx={{ width: 20, height: 10, backgroundColor: theme.palette.info.main }} />
        </Grid>
        <Grid item mr={1}>
          <Typography variant="subtitle2">{t('totalInvested')}</Typography>
        </Grid>
        <Grid item mr={1}>
          <Box sx={{ width: 20, height: 10, backgroundColor: theme.palette.primary.main }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">{t('estReturns')}</Typography>
        </Grid>
      </Grid>
      <PChart
        animate
        lineWidth={35}
        paddingAngle={5}
        data={[
          { title: t('totalInvested'), value: totalInvestment, color: theme.palette.info.main },
          { title: t('estReturns'), value: wealthGained, color: theme.palette.primary.main },
        ]}
      />
    </>
  );
};
