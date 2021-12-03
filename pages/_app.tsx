import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { IntlProvider } from 'react-intl';
import type { AppProps } from 'next/app';
import theme from '../src/theme';

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default NextApp;
