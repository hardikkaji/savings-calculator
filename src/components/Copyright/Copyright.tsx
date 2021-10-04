import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Copyright = () => {
  return (
    <Box pt={4}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Powered By '}
        <Link color="inherit" href="mailto:hardikkaji@gmail.com">
          Hardik Kaji
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
