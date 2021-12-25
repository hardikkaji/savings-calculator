import React from 'react';
import {
  AppBar,
  Button,
  SvgIcon,
  Toolbar,
  Typography,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

import { Dialog, DialogTitle, SettingsForm } from '..';
import { useForm, FormProvider } from 'react-hook-form';

export const Header = () => {
  const theme = useTheme();
  const { t, lang: currentLanguage } = useTranslation('home');
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = React.useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const methods = useForm();
  const onSave = React.useCallback(() => {
    const { language } = methods.getValues();
    if (language !== currentLanguage) {
      setLanguage(language);
    }

    handleClose();
  }, [currentLanguage, handleClose, methods]);

  return (
    <AppBar position="static">
      <Toolbar>
        <SvgIcon>
          <path d="m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z" />
        </SvgIcon>
        <Typography pl={1} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('appTitle')}
        </Typography>
        <Button size="small" color="inherit" onClick={handleClickOpen}>
          <Typography variant="subtitle2">{t('currentLang')} | SEK</Typography>
        </Button>
      </Toolbar>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {t('dialogTitle')}
        </DialogTitle>
        <DialogContent dividers>
          <FormProvider {...methods}>
            <SettingsForm fullScreen={fullScreen} />
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained" color="warning">
            {t('dialogCancel')}
          </Button>
          <Button autoFocus onClick={onSave} variant="contained">
            {t('dialogSave')}
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};
