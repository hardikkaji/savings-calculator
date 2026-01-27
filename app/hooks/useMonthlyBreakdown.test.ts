import { describe, it, expect } from "vitest";
import {
  calculateMonthlyBreakdown,
  calculateFinancialMetrics,
  type MonthlyMetrics,
} from "~/lib/financial-calculations";

export type Totals = {
  totalInvestment: number;
  totalReturns: number;
  finalBalance: number;
};

// Pure function versions for testing (extracted from the hook logic)
function calculateMonthlyData(
  startingAmount: number,
  investedAmount: number,
  expectedReturn: number,
  timePeriod: number,
): MonthlyMetrics[] {
  return calculateMonthlyBreakdown(
    startingAmount,
    investedAmount,
    expectedReturn,
    timePeriod,
  );
}

function calculateTotals(
  startingAmount: number,
  investedAmount: number,
  expectedReturn: number,
  timePeriod: number,
): Totals {
  const metrics = calculateFinancialMetrics(
    startingAmount,
    investedAmount,
    expectedReturn,
    timePeriod,
  );

  const finalBalance =
    metrics.totalReturnsOnStartingAmount + metrics.totalReturnsOnMonthlyAmount;
  const totalInvestment = metrics.totalInvestment;
  const wealthGained = finalBalance - totalInvestment;

  return {
    totalInvestment,
    totalReturns: wealthGained,
    finalBalance,
  };
}

describe("useMonthlyBreakdown calculations", () => {
  const testData = {
    investedAmount: 1000,
    expectedReturn: 10,
    timePeriod: 2,
    startingAmount: 5000,
  };

  it("should calculate monthly data for the given period", () => {
    const monthlyData = calculateMonthlyData(
      testData.startingAmount,
      testData.investedAmount,
      testData.expectedReturn,
      testData.timePeriod,
    );

    // 2 years = 24 months
    expect(monthlyData).toHaveLength(24);

    // First month should start with starting amount
    expect(monthlyData[0].month).toBe(1);
    expect(monthlyData[0].startingBalance).toBe(testData.startingAmount);
    expect(monthlyData[0].investment).toBe(testData.investedAmount);
  });

  it("should apply compound interest monthly", () => {
    const monthlyData = calculateMonthlyData(
      testData.startingAmount,
      testData.investedAmount,
      testData.expectedReturn,
      testData.timePeriod,
    );

    // Monthly ROI = 10 / (100 * 12) = 0.008333...
    // Month 1: interest = 5000 * 0.008333... = 41.67 -> 42 (rounded)
    // New balance = 5000 + 42 + 1000 = 6042
    expect(monthlyData[0].returns).toBeGreaterThan(0);
    expect(monthlyData[0].endingBalance).toBeGreaterThan(
      monthlyData[0].startingBalance,
    );
  });

  it("should carry forward balance to next month", () => {
    const monthlyData = calculateMonthlyData(
      testData.startingAmount,
      testData.investedAmount,
      testData.expectedReturn,
      testData.timePeriod,
    );

    // Month 2 starting balance should equal Month 1 ending balance
    expect(monthlyData[1].startingBalance).toBe(monthlyData[0].endingBalance);
  });

  it("should calculate correct totals", () => {
    const monthlyData = calculateMonthlyData(
      testData.startingAmount,
      testData.investedAmount,
      testData.expectedReturn,
      testData.timePeriod,
    );

    const totals = calculateTotals(
      testData.startingAmount,
      testData.investedAmount,
      testData.expectedReturn,
      testData.timePeriod,
    );

    // Total investment = monthly investment * total months + starting amount
    const expectedTotalInvestment =
      testData.investedAmount * 24 + testData.startingAmount;
    expect(totals.totalInvestment).toBe(expectedTotalInvestment);

    // Final balance should be close to the last month's ending balance
    // (may differ slightly due to rounding in calculations)
    expect(
      Math.abs(
        totals.finalBalance - monthlyData[monthlyData.length - 1].endingBalance,
      ),
    ).toBeLessThan(200);

    // Total returns = final balance - total investment
    expect(totals.totalReturns).toBe(
      totals.finalBalance - totals.totalInvestment,
    );
  });

  it("should handle zero investment", () => {
    const monthlyData = calculateMonthlyData(
      testData.startingAmount,
      0,
      testData.expectedReturn,
      testData.timePeriod,
    );

    const totals = calculateTotals(
      testData.startingAmount,
      0,
      testData.expectedReturn,
      testData.timePeriod,
    );

    // With zero investment, balance should only grow from starting amount
    expect(monthlyData[0].investment).toBe(0);
    expect(monthlyData[0].returns).toBeGreaterThan(0);

    // Total investment should just be the starting amount
    expect(totals.totalInvestment).toBe(testData.startingAmount);
  });

  it("should handle zero return rate", () => {
    const monthlyData = calculateMonthlyData(
      testData.startingAmount,
      testData.investedAmount,
      0,
      testData.timePeriod,
    );

    // With zero return, no interest should be earned
    monthlyData.forEach((row) => {
      expect(row.returns).toBe(0);
    });

    // Verify balance only increases from investments
    expect(monthlyData[0].endingBalance).toBe(
      testData.startingAmount + testData.investedAmount,
    );
  });

  it("should recalculate with different investment amounts", () => {
    const monthlyData1 = calculateMonthlyData(
      testData.startingAmount,
      1000,
      testData.expectedReturn,
      testData.timePeriod,
    );

    const monthlyData2 = calculateMonthlyData(
      testData.startingAmount,
      2000,
      testData.expectedReturn,
      testData.timePeriod,
    );

    // Should have different results with different investment amounts
    expect(monthlyData2[0].investment).toBe(2000);
    expect(monthlyData2[0].investment).not.toBe(monthlyData1[0].investment);

    // Final balance should be higher with more investment
    expect(monthlyData2[monthlyData2.length - 1].endingBalance).toBeGreaterThan(
      monthlyData1[monthlyData1.length - 1].endingBalance,
    );
  });
});
