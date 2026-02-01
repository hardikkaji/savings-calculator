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

export const createMonthlySavingsSlice = (set: any): MonthlySavingsSlice => ({
  investedAmount: 2500,
  expectedReturn: 12,
  timePeriod: 15,
  startingAmount: 10000,
  setMonthlySavingsValue: (key, value) => {
    set((state: any) => ({ ...state, [key]: value }));
  },
});
