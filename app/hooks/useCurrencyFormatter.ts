import { useIntl } from "react-intl";
import { useStore } from "~/useStore";

export function useCurrencyFormatter() {
  const intl = useIntl();
  const currency = useStore((state) => state.currency);

  const options = {
    style: "currency" as const,
    currency: currency,
    currencyDisplay: "narrowSymbol" as const,
    minimumFractionDigits: 0,
  };

  return {
    options,
    format: (value: number) => intl.formatNumber(value, options),
  };
}
