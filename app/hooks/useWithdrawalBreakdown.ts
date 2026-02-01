import { calculateWithdrawalMonthlyBreakdown } from "~/lib/withdrawal-calculations";
import { useStore } from "~/useStore";

export function useWithdrawalBreakdown() {
  const totalInvestment = useStore((state) => state.withdrawalTotalInvestment);
  const withdrawalPerMonth = useStore((state) => state.withdrawalPerMonth);
  const expectedReturnRate = useStore((state) => state.expectedReturnRate);
  const timePeriodYears = useStore((state) => state.timePeriodYears);

  const monthlyData = calculateWithdrawalMonthlyBreakdown(
    totalInvestment,
    withdrawalPerMonth,
    expectedReturnRate,
    timePeriodYears,
  );

  return { monthlyData };
}
