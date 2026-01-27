import { describe, it, expect } from "vitest";
import {
  calculateFinancialMetrics,
  calculateMonthlyBreakdown,
  FinancialMetrics,
  MonthlyMetrics,
} from "./financial-calculations";

describe("financial-calculations utility", () => {
  const testData = {
    investedAmount: 1000,
    expectedReturn: 10,
    timePeriod: 2,
    startingAmount: 5000,
  };

  describe("calculateFinancialMetrics", () => {
    it("should calculate monthly ROI correctly", () => {
      const result = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      // Monthly ROI = 10 / (100 * 12) = 0.008333...
      expect(result.monthlyROI).toBeCloseTo(0.008333, 5);
    });

    it("should calculate total months correctly", () => {
      const result = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      expect(result.totalMonths).toBe(24);
    });

    it("should calculate total returns on starting amount", () => {
      const result = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      // 5000 * (1.1)^2 = 6050
      expect(result.totalReturnsOnStartingAmount).toBe(6050);
    });

    it("should calculate total returns on monthly amount", () => {
      const result = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      expect(result.totalReturnsOnMonthlyAmount).toBeGreaterThan(
        testData.investedAmount * 24,
      );
    });

    it("should calculate total investment correctly", () => {
      const result = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      const expected = testData.startingAmount + testData.investedAmount * 24;
      expect(result.totalInvestment).toBe(expected);
    });

    it("should calculate total returns as sum of both sources", () => {
      const result = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      expect(result.totalReturns).toBe(
        result.totalReturnsOnStartingAmount +
          result.totalReturnsOnMonthlyAmount,
      );
    });

    it("should handle zero starting amount", () => {
      const result = calculateFinancialMetrics(0, 1000, 10, 2);

      expect(result.totalReturnsOnStartingAmount).toBe(0);
      expect(result.totalInvestment).toBe(24000);
    });

    it("should handle zero investment amount", () => {
      const result = calculateFinancialMetrics(5000, 0, 10, 2);

      expect(result.totalReturnsOnMonthlyAmount).toBe(0);
      expect(result.totalInvestment).toBe(5000);
      expect(result.totalReturns).toBe(result.totalReturnsOnStartingAmount);
    });

    it("should handle different time periods", () => {
      const result1 = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        1,
      );

      const result5 = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        5,
      );

      expect(result5.totalMonths).toBe(60);
      expect(result5.totalReturns).toBeGreaterThan(result1.totalReturns);
    });

    it("should handle different return rates", () => {
      const result5pct = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        5,
        testData.timePeriod,
      );

      const result10pct = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        10,
        testData.timePeriod,
      );

      expect(result10pct.totalReturns).toBeGreaterThan(result5pct.totalReturns);
    });
  });

  describe("calculateMonthlyBreakdown", () => {
    it("should generate correct number of months", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      expect(result).toHaveLength(24);
    });

    it("should have sequential month numbers", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      result.forEach((row, index) => {
        expect(row.month).toBe(index + 1);
      });
    });

    it("should start with initial starting amount", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      expect(result[0].startingBalance).toBe(testData.startingAmount);
    });

    it("should apply consistent monthly investment", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      result.forEach((row) => {
        expect(row.investment).toBe(testData.investedAmount);
      });
    });

    it("should apply compound interest monthly", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      // All months should have positive returns
      result.forEach((row) => {
        expect(row.returns).toBeGreaterThanOrEqual(0);
      });

      // Returns should increase as balance grows
      expect(result[23].returns).toBeGreaterThan(result[0].returns);
    });

    it("should carry forward balance to next month", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i + 1].startingBalance).toBe(result[i].endingBalance);
      }
    });

    it("should calculate ending balance correctly", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      result.forEach((row) => {
        const expectedEnding = Math.round(
          row.startingBalance + row.returns + row.investment,
        );
        expect(row.endingBalance).toBe(expectedEnding);
      });
    });

    it("should handle zero investment", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        0,
        testData.expectedReturn,
        testData.timePeriod,
      );

      result.forEach((row) => {
        expect(row.investment).toBe(0);
        expect(row.returns).toBeGreaterThan(0);
      });
    });

    it("should handle zero return rate", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        0,
        testData.timePeriod,
      );

      // With zero return, no interest earned
      result.forEach((row) => {
        expect(row.returns).toBe(0);
      });

      // Balance should only increase by monthly investment
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i + 1].startingBalance).toBe(
          result[i].startingBalance + testData.investedAmount,
        );
      }
    });

    it("should show increasing balance over time", () => {
      const result = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i + 1].endingBalance).toBeGreaterThan(
          result[i].endingBalance,
        );
      }
    });
  });

  describe("integration: calculateFinancialMetrics with calculateMonthlyBreakdown", () => {
    it("final balance should be close to total returns on monthly amount + starting", () => {
      const metrics = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      const monthlyBreakdown = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      const finalBalance =
        monthlyBreakdown[monthlyBreakdown.length - 1].endingBalance;

      // Totals may differ slightly due to rounding, but should be within tolerance
      expect(Math.abs(metrics.totalReturns - finalBalance)).toBeLessThan(200);
    });

    it("total investment should match sum of starting + all investments", () => {
      const metrics = calculateFinancialMetrics(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      const monthlyBreakdown = calculateMonthlyBreakdown(
        testData.startingAmount,
        testData.investedAmount,
        testData.expectedReturn,
        testData.timePeriod,
      );

      const totalInvestedInMonthly = monthlyBreakdown.reduce(
        (sum, row) => sum + row.investment,
        0,
      );

      expect(metrics.totalInvestment).toBe(
        testData.startingAmount + totalInvestedInMonthly,
      );
    });
  });
});
