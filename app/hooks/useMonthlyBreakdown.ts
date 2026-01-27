import { useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { useStore } from "~/useStore";
import {
  calculateMonthlyBreakdown,
  calculateFinancialMetrics,
  type MonthlyMetrics,
} from "~/lib/financial-calculations";

export type { MonthlyMetrics };

export type Totals = {
  totalInvestment: number;
  totalReturns: number;
  finalBalance: number;
};

export function useMonthlyBreakdown() {
  const { investedAmount, expectedReturn, timePeriod, startingAmount } =
    useStore(
      useShallow((state) => ({
        investedAmount: state.investedAmount,
        expectedReturn: state.expectedReturn,
        timePeriod: state.timePeriod,
        startingAmount: state.startingAmount,
      })),
    );

  const monthlyData = useMemo(
    () =>
      calculateMonthlyBreakdown(
        startingAmount,
        investedAmount,
        expectedReturn,
        timePeriod,
      ),
    [startingAmount, investedAmount, expectedReturn, timePeriod],
  );

  const totals = useMemo(() => {
    const metrics = calculateFinancialMetrics(
      startingAmount,
      investedAmount,
      expectedReturn,
      timePeriod,
    );

    const finalBalance =
      metrics.totalReturnsOnStartingAmount +
      metrics.totalReturnsOnMonthlyAmount;
    const wealthGained = finalBalance - metrics.totalInvestment;

    return {
      totalInvestment: metrics.totalInvestment,
      totalReturns: wealthGained,
      finalBalance,
    };
  }, [startingAmount, investedAmount, expectedReturn, timePeriod]);

  return { monthlyData, totals };
}
