import { calculateWithdrawalMetrics } from "~/lib/withdrawal-calculations";
import type { WithdrawalMetrics } from "~/lib/withdrawal-calculations";
import { useStore } from "~/useStore";

export function useCalculateWithdrawal(): WithdrawalMetrics {
  const totalInvestment = useStore((state) => state.withdrawalTotalInvestment);
  const withdrawalPerMonth = useStore((state) => state.withdrawalPerMonth);
  const expectedReturnRate = useStore((state) => state.expectedReturnRate);
  const timePeriodYears = useStore((state) => state.timePeriodYears);

  return calculateWithdrawalMetrics(
    totalInvestment,
    withdrawalPerMonth,
    expectedReturnRate,
    timePeriodYears,
  );
}
