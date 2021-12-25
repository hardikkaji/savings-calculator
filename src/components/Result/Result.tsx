import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

import { useCalculateGain } from '../../hooks';
import { formatter, SupportedLang } from '../../utils/currency-formatter';

export const Result = () => {
  const { totalReturns, totalInvestment, wealthGained } = useCalculateGain();
  const { t, lang } = useTranslation('home');

  return (
    <Container maxWidth="xs">
      <Grid container marginTop={3}>
        <Grid container>
          <Grid item flex="1" color={(t) => t.palette.info.main}>
            <Typography fontWeight={300}>{t('totalInvestedAmount')}</Typography>
            <Typography variant="h6">
              {formatter(totalInvestment, lang as SupportedLang)}
            </Typography>
          </Grid>
          <Grid item color={(t) => t.palette.primary.main}>
            <Typography fontWeight={300}>{t('estReturns')}</Typography>
            <Typography variant="h6">{formatter(wealthGained, lang as SupportedLang)}</Typography>
          </Grid>
        </Grid>
        <Grid marginTop={2} container justifyContent="center" alignContent="center">
          <Grid item>
            <Typography fontWeight={300}>{t('totalValue')}</Typography>
            <Typography variant="h6" alignSelf="center">
              {formatter(totalReturns, lang as SupportedLang)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
