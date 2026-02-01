/**
 * Central configuration for calculator inputs
 * All min, max, and step values for form sliders
 */

export const SAVINGS_CONFIG = {
  startingAmount: {
    min: 0,
    max: 1000000,
    step: 2500,
  },
  investmentPerMonth: {
    min: 500,
    max: 100000,
    step: 500,
  },
  expectedAnnualReturn: {
    min: 0,
    max: 100,
    step: 1,
  },
  timePeriod: {
    min: 1,
    max: 50,
    step: 1,
  },
};

export const WITHDRAWAL_CONFIG = {
  totalInvestment: {
    min: 0,
    max: 50000000,
    step: 10000,
  },
  withdrawalPerMonth: {
    min: 500,
    max: 100000,
    step: 500,
  },
  expectedReturnRate: {
    min: 0,
    max: 100,
    step: 1,
  },
  timePeriod: {
    min: 1,
    max: 50,
    step: 1,
  },
};
