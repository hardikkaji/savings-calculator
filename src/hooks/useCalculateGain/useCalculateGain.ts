import { useMemo, useCallback } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '../../useStore';

const NO_OF_MONTHS = 12;

export const useCalculateGain = () => {
  const { investedAmount, expectedReturn, timePeriod } = useStore(
    useCallback(
      ({ expectedReturn, timePeriod, investedAmount }) => ({
        expectedReturn,
        timePeriod,
        investedAmount,
      }),
      [],
    ),
    shallow,
  );

  const monthlyROI = useMemo(() => expectedReturn / (100 * NO_OF_MONTHS), [expectedReturn]);
  const months = useMemo(() => timePeriod * NO_OF_MONTHS, [timePeriod]);
  const totalReturns = useMemo(
    () =>
      Math.round(
        investedAmount * ((Math.pow(1 + monthlyROI, months) - 1) / monthlyROI) * (1 + monthlyROI),
      ),
    [investedAmount, monthlyROI, months],
  );
  const totalInvestment = useMemo(
    () => investedAmount * timePeriod * NO_OF_MONTHS,
    [investedAmount, timePeriod],
  );
  const wealthGained = useMemo(
    () => totalReturns - totalInvestment,
    [totalInvestment, totalReturns],
  );

  return { totalReturns, totalInvestment, wealthGained };
};
