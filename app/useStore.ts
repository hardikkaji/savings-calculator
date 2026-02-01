import { create } from "zustand";

import {
  createMonthlySavingsSlice,
  type MonthlySavingsSlice,
} from "~/store/monthlySavingsSlice";
import { createSettingsSlice, type SettingsSlice } from "~/store/settingsSlice";
import {
  createWithdrawalSlice,
  type WithdrawalSlice,
} from "~/store/withdrawalSlice";

// ============================================================
// COMBINED STORE TYPE
// ============================================================
export type Store = SettingsSlice & MonthlySavingsSlice & WithdrawalSlice;

// ============================================================
// STORE IMPLEMENTATION
// ============================================================
export const useStore = create<Store>((set) => ({
  ...createSettingsSlice(set),
  ...createMonthlySavingsSlice(set),
  ...createWithdrawalSlice(set),
}));
