import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={createTheme({})}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default NextApp;
