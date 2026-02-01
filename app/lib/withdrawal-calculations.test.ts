import { describe, it, expect } from "vitest";
import {
  calculateWithdrawalMetrics,
  calculateWithdrawalMonthlyBreakdown,
} from "~/lib/withdrawal-calculations";

describe("calculateWithdrawalMetrics", () => {
  it("should calculate correct withdrawal metrics for the given test case", () => {
    // Test case: Total Investment 500000, Withdrawal per month 10000,
    // Expected return 8%, Time period 5 years
    const result = calculateWithdrawalMetrics(500000, 10000, 8, 5);

    expect(result.totalInvestment).toBe(500000);
    expect(result.totalWithdrawal).toBe(600000);
    // The final value after 5 years with 8% annual return and 10000/month withdrawal
    // (withdrawal applied first, then interest)
    expect(result.finalValue).toBe(5256);
  });

  it("should handle zero withdrawal", () => {
    const result = calculateWithdrawalMetrics(100000, 0, 8, 1);

    expect(result.totalInvestment).toBe(100000);
    expect(result.totalWithdrawal).toBe(0);
    // After 1 year at 8% return with no withdrawals
    expect(result.finalValue).toBeGreaterThan(100000);
  });

  it("should handle aggressive withdrawal that depletes investment", () => {
    const result = calculateWithdrawalMetrics(10000, 5000, 0, 2);

    expect(result.totalInvestment).toBe(10000);
    expect(result.totalWithdrawal).toBe(10000);
    expect(result.finalValue).toBe(0);
  });

  it("should calculate with different return rates", () => {
    const result5percent = calculateWithdrawalMetrics(500000, 10000, 5, 5);
    const result10percent = calculateWithdrawalMetrics(500000, 10000, 10, 5);

    // Higher return rate should result in higher final value
    expect(result10percent.finalValue).toBeGreaterThan(
      result5percent.finalValue,
    );
  });

  it("should handle single month period", () => {
    const result = calculateWithdrawalMetrics(100000, 5000, 12, 1 / 12);

    expect(result.totalInvestment).toBe(100000);
    // One month at 1% monthly rate (12% annual)
    expect(result.totalWithdrawal).toBeGreaterThan(0);
    expect(result.totalWithdrawal).toBeLessThanOrEqual(5000);
  });

  it("should not go negative", () => {
    const result = calculateWithdrawalMetrics(1000, 1000, 0, 5);

    expect(result.finalValue).toBeGreaterThanOrEqual(0);
  });

  it("should accumulate interest correctly", () => {
    // No withdrawal, should accumulate investment
    const result = calculateWithdrawalMetrics(100000, 0, 8, 1);
    const expectedValue = 100000 * Math.pow(1 + 0.08 / 12, 12);

    expect(result.finalValue).toBeCloseTo(expectedValue, 0);
  });
});

describe("calculateWithdrawalMonthlyBreakdown", () => {
  it("should generate correct monthly breakdown for test case", () => {
    const breakdown = calculateWithdrawalMonthlyBreakdown(500000, 10000, 8, 5);

    expect(breakdown).toHaveLength(60); // 5 years * 12 months
    expect(breakdown[0].month).toBe(1);
    expect(breakdown[59].month).toBe(60);

    // First month
    const firstMonth = breakdown[0];
    expect(firstMonth.withdrawal).toBe(10000);
    expect(firstMonth.interest).toBeGreaterThan(0);

    // Last month should match final value from metrics calculation
    const metrics = calculateWithdrawalMetrics(500000, 10000, 8, 5);
    expect(breakdown[59].balance).toBe(metrics.finalValue);
  });

  it("should have decreasing balance with regular withdrawals", () => {
    const breakdown = calculateWithdrawalMonthlyBreakdown(100000, 5000, 5, 2);

    for (let i = 1; i < breakdown.length; i++) {
      // Balance should generally decrease (allowing for interest gains in some months)
      // But final balance should be less than initial
      expect(breakdown[i].balance).toBeLessThanOrEqual(
        breakdown[i - 1].balance + 100,
      ); // Small tolerance for rounding
    }

    expect(breakdown[breakdown.length - 1].balance).toBeLessThan(100000);
  });

  it("should calculate monthly interest correctly", () => {
    const breakdown = calculateWithdrawalMonthlyBreakdown(100000, 0, 12, 1);

    // First month: no withdrawal, so interest = 100000 * 0.01 = 1000
    expect(breakdown[0].interest).toBeCloseTo(1000, -1); // Allow ±10 rounding difference
  });

  it("should sum withdrawals to total withdrawal from metrics", () => {
    const breakdown = calculateWithdrawalMonthlyBreakdown(500000, 10000, 8, 5);
    const metrics = calculateWithdrawalMetrics(500000, 10000, 8, 5);

    const totalWithdrawals = breakdown.reduce(
      (sum, month) => sum + month.withdrawal,
      0,
    );

    expect(totalWithdrawals).toBe(metrics.totalWithdrawal);
  });

  it("should have correct balance progression", () => {
    const breakdown = calculateWithdrawalMonthlyBreakdown(10000, 500, 6, 1);

    // Verify balance generally decreases (minus interest gains)
    for (let i = 1; i < breakdown.length; i++) {
      expect(breakdown[i].balance).toBeLessThanOrEqual(
        breakdown[i - 1].balance + 100,
      );
    }
  });
});
