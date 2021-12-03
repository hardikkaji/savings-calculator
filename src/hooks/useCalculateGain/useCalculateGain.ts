import { useMemo, useCallback } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '../../useStore';

const NO_OF_MONTHS = 12;

export const useCalculateGain = () => {
  const { investedAmount, expectedReturn, timePeriod, startingAmount } = useStore(
    useCallback(
      ({ expectedReturn, timePeriod, investedAmount, startingAmount }) => ({
        expectedReturn,
        timePeriod,
        investedAmount,
        startingAmount,
      }),
      [],
    ),
    shallow,
  );

  const monthlyROI = useMemo(() => expectedReturn / (100 * NO_OF_MONTHS), [expectedReturn]);
  const months = useMemo(() => timePeriod * NO_OF_MONTHS, [timePeriod]);

  const totalReturnsOnStartingAmount = useMemo(
    () =>
      Math.round(
        startingAmount *
          Math.pow(1 + expectedReturn / 100 / NO_OF_MONTHS, timePeriod * NO_OF_MONTHS),
      ),
    [expectedReturn, startingAmount, timePeriod],
  );

  const totalReturnsOnMonthlyAmount = useMemo(
    () =>
      Math.round(
        investedAmount * ((Math.pow(1 + monthlyROI, months) - 1) / monthlyROI) * (1 + monthlyROI),
      ),
    [investedAmount, monthlyROI, months],
  );

  const totalInvestment = useMemo(
    () => investedAmount * timePeriod * NO_OF_MONTHS + startingAmount,
    [investedAmount, timePeriod, startingAmount],
  );

  const wealthGained = useMemo(
    () => totalReturnsOnMonthlyAmount + totalReturnsOnStartingAmount - totalInvestment,
    [totalInvestment, totalReturnsOnMonthlyAmount, totalReturnsOnStartingAmount],
  );

  return {
    totalReturns: totalReturnsOnStartingAmount + totalReturnsOnMonthlyAmount,
    totalInvestment,
    wealthGained,
  };
};
