import { create } from "zustand";

type Store = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  startingAmount: number;
};

export type StoreKey = keyof Store;

type State = Store & {
  setStoreValue: (key: StoreKey, value: number) => void;
};

export const useStore = create<State>((set) => ({
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  locale: "sv-SE",
  startingAmount: 100000,
  setStoreValue: (key: StoreKey, value: number) => {
    set((state) => ({ ...state, [key]: value }));
  },
}));
