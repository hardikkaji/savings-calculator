export type SupportedLang = 'en' | 'sv';
export type Config = {
  locale: string;
  currency: string;
};

const langToLocale: Record<SupportedLang, Config> = {
  en: {
    locale: 'en-SE',
    currency: 'SEK',
  },
  sv: {
    locale: 'sv-SE',
    currency: 'SEK',
  },
};

export const formatter = (number: number, lang: SupportedLang = 'en') => {
  const config = langToLocale[lang];
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currency,
    minimumFractionDigits: 0,
  }).format(number);
};
