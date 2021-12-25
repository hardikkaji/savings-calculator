import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useSettings } from '../../hooks';

const langOptions = [
  { value: 'en', label: 'English' },
  { value: 'sv', label: 'Svenska' },
];
const currencyOptions = [
  { value: 'SEK', label: 'SEK - kr' },
  { value: 'USD', label: 'USD - $' },
  { value: 'INR', label: 'INR - ₹' },
  { value: 'EUR', label: 'EUR - €' },
  { value: 'GBP', label: 'GBP - £' },
  { value: 'NOK', label: 'NOK - kr' },
];

export const SettingsForm: React.FC<{ fullScreen: boolean }> = ({ fullScreen }) => {
  const { t, lang } = useTranslation('home');
  const { register } = useFormContext();
  const { settings } = useSettings();

  return (
    <>
      <FormControl
        sx={{
          minWidth: {
            md: 400,
          },
        }}
        fullWidth={fullScreen}
      >
        <InputLabel id="language">{t('language')}</InputLabel>
        <Select
          labelId="language"
          id="language"
          label={t('language')}
          defaultValue={lang}
          {...register('language')}
        >
          {langOptions.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl
        sx={{
          minWidth: {
            md: 400,
          },
        }}
        fullWidth={fullScreen}
      >
        <InputLabel id="currency">{t('currency')}</InputLabel>
        <Select
          labelId="currency"
          id="currency"
          label={t('currency')}
          defaultValue={settings.currency || 'SEK'}
          {...register('currency')}
        >
          {currencyOptions.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
