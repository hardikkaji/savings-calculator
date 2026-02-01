import { create } from "zustand";
import type { SupportedCurrency, SupportedLang } from "~/types";

type WithdrawalState = {
  withdrawalTotalInvestment: number;
  withdrawalPerMonth: number;
  expectedReturnRate: number;
  timePeriodYears: number;
};

type Store = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  startingAmount: number;
  language: SupportedLang;
  currency: SupportedCurrency;
  withdrawalTotalInvestment: number;
  withdrawalPerMonth: number;
  expectedReturnRate: number;
  timePeriodYears: number;
  withdrawal: WithdrawalState;
};

export type StoreKey = keyof Omit<Store, "withdrawal">;

type SetStoreKeys = (key: StoreKey, value: number | string) => void;
type State = Store & {
  setStoreValue: SetStoreKeys;
  setWithdrawalValue: (key: keyof WithdrawalState, value: number) => void;
};

export const useStore = create<State>((set) => ({
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  startingAmount: 10000,
  language: "en",
  currency: "SEK",
  withdrawalTotalInvestment: 500000,
  withdrawalPerMonth: 10000,
  expectedReturnRate: 8,
  timePeriodYears: 5,
  withdrawal: {
    withdrawalTotalInvestment: 500000,
    withdrawalPerMonth: 10000,
    expectedReturnRate: 8,
    timePeriodYears: 5,
  },
  setStoreValue: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
  },
  setWithdrawalValue: (key, value) => {
    set((state) => ({
      ...state,
      [key]: value,
      withdrawal: { ...state.withdrawal, [key]: value },
    }));
  },
}));
