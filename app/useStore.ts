import { create } from "zustand";
import type { SupportedCurrency, SupportedLang } from "~/types";

type Store = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  startingAmount: number;
  language: SupportedLang;
  currency: SupportedCurrency;
};

export type StoreKey = keyof Store;

type SetStoreKeys = (key: StoreKey, value: number | string) => void;
type State = Store & {
  setStoreValue: SetStoreKeys;
};

export const useStore = create<State>((set) => ({
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  startingAmount: 10000,
  language: "en",
  currency: "SEK",
  setStoreValue: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
  },
}));
