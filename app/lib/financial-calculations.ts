const NO_OF_MONTHS = 12;

export interface FinancialMetrics {
  monthlyROI: number;
  totalMonths: number;
  totalReturnsOnStartingAmount: number;
  totalReturnsOnMonthlyAmount: number;
  totalReturns: number;
  totalInvestment: number;
}

export interface MonthlyMetrics {
  month: number;
  startingBalance: number;
  investment: number;
  returns: number;
  endingBalance: number;
}

/**
 * Calculate core financial metrics for savings calculations
 * @param startingAmount Initial investment amount
 * @param investedAmount Monthly investment amount
 * @param expectedReturn Annual expected return percentage
 * @param timePeriod Investment period in years
 * @returns Object containing all calculated financial metrics
 */
export function calculateFinancialMetrics(
  startingAmount: number,
  investedAmount: number,
  expectedReturn: number,
  timePeriod: number,
): FinancialMetrics {
  const monthlyROI = expectedReturn / (100 * NO_OF_MONTHS);
  const totalMonths = timePeriod * NO_OF_MONTHS;

  const totalReturnsOnStartingAmount = Math.round(
    startingAmount * Math.pow(1 + expectedReturn / 100, timePeriod),
  );

  const totalReturnsOnMonthlyAmount = Math.round(
    investedAmount *
      ((Math.pow(1 + monthlyROI, totalMonths) - 1) / monthlyROI) *
      (1 + monthlyROI),
  );

  const totalReturns =
    totalReturnsOnStartingAmount + totalReturnsOnMonthlyAmount;

  const totalInvestment =
    investedAmount * timePeriod * NO_OF_MONTHS + startingAmount;

  return {
    monthlyROI,
    totalMonths,
    totalReturnsOnStartingAmount,
    totalReturnsOnMonthlyAmount,
    totalReturns,
    totalInvestment,
  };
}

/**
 * Calculate monthly breakdown of investments with compound interest
 * @param startingAmount Initial investment amount
 * @param investedAmount Monthly investment amount
 * @param expectedReturn Annual expected return percentage
 * @param timePeriod Investment period in years
 * @returns Array of monthly data showing balance progression
 */
export function calculateMonthlyBreakdown(
  startingAmount: number,
  investedAmount: number,
  expectedReturn: number,
  timePeriod: number,
): MonthlyMetrics[] {
  const data: MonthlyMetrics[] = [];
  const monthlyROI = expectedReturn / (100 * NO_OF_MONTHS);
  const totalMonths = timePeriod * NO_OF_MONTHS;
  let balance = startingAmount;

  for (let month = 1; month <= totalMonths; month++) {
    const startBalance = balance;
    const interestEarned = Math.round(balance * monthlyROI);
    const newBalance = Math.round(balance + interestEarned + investedAmount);

    data.push({
      month,
      startingBalance: startBalance,
      investment: investedAmount,
      returns: interestEarned,
      endingBalance: newBalance,
    });

    balance = newBalance;
  }

  return data;
}
