import type { SupportedCurrency, SupportedLang } from "~/types";

export type SettingsSlice = {
  language: SupportedLang;
  currency: SupportedCurrency;
  setLanguage: (language: SupportedLang) => void;
  setCurrency: (currency: SupportedCurrency) => void;
};

export const createSettingsSlice = (set: any): SettingsSlice => ({
  language: "en",
  currency: "SEK",
  setLanguage: (language) => set({ language }),
  setCurrency: (currency) => set({ currency }),
});
