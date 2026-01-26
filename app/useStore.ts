import { create } from "zustand";

type Store = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  startingAmount: number;
};

export type StoreKey = keyof Store;

type SetStoreKeys = (key: StoreKey | "locale", value: number) => void;
type State = Store & {
  setStoreValue: SetStoreKeys;
};

export const useStore = create<State>((set) => ({
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  locale: "sv-SE",
  startingAmount: 10000,
  setStoreValue: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
  },
}));
