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

export const createWithdrawalSlice = (set: any): WithdrawalSlice => ({
  withdrawalTotalInvestment: 5000000,
  withdrawalPerMonth: 20000,
  expectedReturnRate: 12,
  timePeriodYears: 15,
  setWithdrawalValue: (key, value) => {
    set((state: any) => ({ ...state, [key]: value }));
  },
});
