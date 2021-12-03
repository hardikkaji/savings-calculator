import React, { useCallback, useRef, useEffect } from 'react';
import { Grid, Input, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import { useStore } from '../../useStore';

const StyledInput = styled(Input)`
  width: 100px;
  padding: 0;
`;

type Props = {
  min?: number;
  max?: number;
  step?: number;
  startAdornment?: string;
  endAdornment?: string;
  label: string;
  fieldName: 'investedAmount' | 'timePeriod' | 'expectedReturn' | 'startingAmount';
};

export const SliderInput = ({
  min = 0,
  max = 100,
  step = 1,
  label,
  endAdornment,
  fieldName,
}: Props) => {
  const setValue = useStore(useCallback((state) => state.setStoreValue, []));
  const value = useStore(useCallback((state) => state[fieldName], [fieldName]));

  const handleSliderChange = useCallback(
    (_: Event, newValue: number | number[]) => {
      setValue(fieldName, newValue as number);
    },
    [fieldName, setValue],
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(fieldName, event.target.value === '' ? 0 : Number(event.target.value));
    },
    [setValue, fieldName],
  );

  const handleBlur = useCallback(() => {
    if (value < min) {
      setValue(fieldName, min);
    } else if (value > max) {
      setValue(fieldName, max);
    }
  }, [value, min, max, setValue, fieldName]);

  return (
    <Box paddingTop={3}>
      <Grid container>
        <Grid item flex="1">
          <Typography variant="subtitle2" fontWeight={400}>
            {label}
          </Typography>
        </Grid>
        <Grid item justifySelf="flex-end">
          <StyledInput
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={value}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
              'aria-labelledby': 'input-slider',
              style: { padding: '0' },
            }}
            endAdornment={endAdornment && <Box marginRight={1}>{endAdornment}</Box>}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
            step={step}
            value={value}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
