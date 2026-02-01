import { create } from "zustand";
import type { SupportedCurrency, SupportedLang } from "~/types";

// ============================================================
// SETTINGS SLICE
// ============================================================
export type SettingsSlice = {
  language: SupportedLang;
  currency: SupportedCurrency;
  setLanguage: (language: SupportedLang) => void;
  setCurrency: (currency: SupportedCurrency) => void;
};

// ============================================================
// MONTHLY SAVINGS SLICE
// ============================================================
export type MonthlySavingsSlice = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  startingAmount: number;
  setMonthlySavingsValue: (
    key: keyof Omit<MonthlySavingsSlice, "setMonthlySavingsValue">,
    value: number,
  ) => void;
};

// ============================================================
// WITHDRAWAL SLICE
// ============================================================
export type WithdrawalSlice = {
  withdrawalTotalInvestment: number;
  withdrawalPerMonth: number;
  expectedReturnRate: number;
  timePeriodYears: number;
  setWithdrawalValue: (
    key: keyof Omit<WithdrawalSlice, "setWithdrawalValue">,
    value: number,
  ) => void;
};

// ============================================================
// COMBINED STORE TYPE
// ============================================================
type State = SettingsSlice & MonthlySavingsSlice & WithdrawalSlice;

// ============================================================
// STORE IMPLEMENTATION
// ============================================================
export const useStore = create<State>((set) => ({
  // Settings Slice
  language: "en",
  currency: "SEK",
  setLanguage: (language) => set({ language }),
  setCurrency: (currency) => set({ currency }),

  // Monthly Savings Slice
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  startingAmount: 10000,
  setMonthlySavingsValue: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
  },

  // Withdrawal Slice
  withdrawalTotalInvestment: 500000,
  withdrawalPerMonth: 10000,
  expectedReturnRate: 8,
  timePeriodYears: 5,
  setWithdrawalValue: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
  },
}));
