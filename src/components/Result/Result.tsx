import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

import { formatter } from '../../utils/currency-formatter';
import { useCalculateGain, useSettings } from '../../hooks';
import { SupportedLang } from '../../types';

export const Result = () => {
  const { totalReturns, totalInvestment, wealthGained } = useCalculateGain();
  const { t, lang } = useTranslation('home');
  const { settings } = useSettings();

  return (
    <Container maxWidth="xs">
      <Grid container marginTop={3}>
        <Grid container>
          <Grid item flex="1" color={(t) => t.palette.info.main}>
            <Typography fontWeight={300}>{t('totalInvestedAmount')}</Typography>
            <Typography variant="h6">
              {formatter(totalInvestment, lang as SupportedLang, settings.currency)}
            </Typography>
          </Grid>
          <Grid item color={(t) => t.palette.primary.main}>
            <Typography fontWeight={300}>{t('estReturns')}</Typography>
            <Typography variant="h6">
              {formatter(wealthGained, lang as SupportedLang, settings.currency)}
            </Typography>
          </Grid>
        </Grid>
        <Grid marginTop={2} container justifyContent="center" alignContent="center">
          <Grid item>
            <Typography fontWeight={300}>{t('totalValue')}</Typography>
            <Typography variant="h6" alignSelf="center">
              {formatter(totalReturns, lang as SupportedLang, settings.currency)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
