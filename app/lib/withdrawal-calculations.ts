export interface WithdrawalMetrics {
  totalInvestment: number;
  totalWithdrawal: number;
  finalValue: number;
}

export interface WithdrawalMonthlyMetrics {
  month: number;
  balance: number;
  withdrawal: number;
  interest: number;
}

/**
 * Calculates withdrawal plan metrics
 * @param totalInvestment - Initial investment amount
 * @param withdrawalPerMonth - Monthly withdrawal amount
 * @param expectedReturnRate - Annual return rate (as percentage, e.g., 8 for 8%)
 * @param timePeriodYears - Time period in years
 */
export function calculateWithdrawalMetrics(
  totalInvestment: number,
  withdrawalPerMonth: number,
  expectedReturnRate: number,
  timePeriodYears: number,
): WithdrawalMetrics {
  const monthlyRate = expectedReturnRate / 100 / 12;
  const totalMonths = timePeriodYears * 12;

  let balance = totalInvestment;
  let totalWithdrawal = 0;

  for (let month = 0; month < totalMonths; month++) {
    // Apply withdrawal first (don't go below 0)
    const actualWithdrawal = Math.min(balance, withdrawalPerMonth);
    balance -= actualWithdrawal;
    totalWithdrawal += actualWithdrawal;

    // Then calculate interest on remaining balance
    balance = balance * (1 + monthlyRate);
  }

  return {
    totalInvestment,
    totalWithdrawal: Math.round(totalWithdrawal),
    finalValue: Math.round(balance),
  };
}

/**
 * Calculates monthly breakdown for withdrawal plan
 */
export function calculateWithdrawalMonthlyBreakdown(
  totalInvestment: number,
  withdrawalPerMonth: number,
  expectedReturnRate: number,
  timePeriodYears: number,
): WithdrawalMonthlyMetrics[] {
  const monthlyRate = expectedReturnRate / 100 / 12;
  const totalMonths = timePeriodYears * 12;

  let balance = totalInvestment;
  const monthlyData: WithdrawalMonthlyMetrics[] = [];

  for (let month = 1; month <= totalMonths; month++) {
    // Apply withdrawal first
    const actualWithdrawal = Math.min(balance, withdrawalPerMonth);
    balance -= actualWithdrawal;

    // Calculate interest on remaining balance
    const interest = balance * monthlyRate;
    balance += interest;

    monthlyData.push({
      month,
      balance: Math.round(balance),
      withdrawal: Math.round(actualWithdrawal),
      interest: Math.round(interest),
    });
  }

  return monthlyData;
}
