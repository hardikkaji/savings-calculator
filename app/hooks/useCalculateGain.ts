import { useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { useStore } from "~/useStore";
import { calculateFinancialMetrics } from "~/lib/financial-calculations";

export const useCalculateGain = () => {
  const { investedAmount, expectedReturn, timePeriod, startingAmount } =
    useStore(
      useShallow((state) => ({
        investedAmount: state.investedAmount,
        expectedReturn: state.expectedReturn,
        timePeriod: state.timePeriod,
        startingAmount: state.startingAmount,
      })),
    );

  const metrics = useMemo(
    () =>
      calculateFinancialMetrics(
        startingAmount,
        investedAmount,
        expectedReturn,
        timePeriod,
      ),
    [startingAmount, investedAmount, expectedReturn, timePeriod],
  );

  const wealthGained = useMemo(
    () => metrics.totalReturns - metrics.totalInvestment,
    [metrics.totalReturns, metrics.totalInvestment],
  );

  return {
    totalValue: metrics.totalReturns,
    totalInvestment: metrics.totalInvestment,
    wealthGained,
  };
};
