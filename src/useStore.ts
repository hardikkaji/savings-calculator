import create from 'zustand';

type State = {
  investedAmount: number;
  timePeriod: number;
  expectedReturn: number;
  setStoreValue: (key: string, value: number) => void;
};

export const useStore = create<State>((set) => ({
  investedAmount: 25000,
  expectedReturn: 12,
  timePeriod: 10,
  setStoreValue: (key: string, value: number) => {
    set((state) => ({ ...state, [key]: value }));
  },
}));
