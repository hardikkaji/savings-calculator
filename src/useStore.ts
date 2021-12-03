import create from 'zustand';

type State = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  startingAmount: number;
  setStoreValue: (key: string, value: number) => void;
};

export const useStore = create<State>((set) => ({
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  locale: 'sv-SE',
  startingAmount: 100000,
  setStoreValue: (key: string, value: number) => {
    set((state) => ({ ...state, [key]: value }));
  },
}));
