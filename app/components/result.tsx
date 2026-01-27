import { TrendingUp } from "lucide-react";
import { useIntl } from "react-intl";
import { useCalculateGain } from "~/hooks/useCalculateGain";
import { useStore } from "~/useStore";
import { messages } from "./messages";

export function Result() {
  const intl = useIntl();
  const { totalInvestment, wealthGained, totalReturns } = useCalculateGain();
  const currency = useStore((state) => state.currency);

  const options = {
    style: "currency" as const,
    currency: currency,
    currencyDisplay: "narrowSymbol" as const,
    minimumFractionDigits: 0,
  };

  return (
    <div className="flex flex-col gap-3 text-md">
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-green-500" />
        {intl.formatMessage(messages.totalInvestment)}:{" "}
        {intl.formatNumber(totalInvestment, options)}
      </h3>
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-purple-500" />
        {intl.formatMessage(messages.totalWealthGained)}:{" "}
        {intl.formatNumber(wealthGained, options)}
      </h3>
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-blue-500" />
        {intl.formatMessage(messages.totalReturns)}:{" "}
        {intl.formatNumber(totalReturns, options)}
      </h3>
    </div>
  );
}
