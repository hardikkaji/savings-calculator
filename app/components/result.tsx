import { TrendingUp } from "lucide-react";
import { useCalculateGain } from "~/hooks/useCalculateGain";
import { formatter } from "~/lib/currency-formatter";

export function Result() {
  const { totalInvestment, wealthGained, totalReturns } = useCalculateGain();
  return (
    <div className="flex flex-col gap-3 text-md">
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-green-500" />
        Total Investment: {formatter(totalInvestment, "sv", "SEK")}
      </h3>
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-purple-500" />
        Total Wealth Gained: {formatter(wealthGained, "sv", "SEK")}
      </h3>
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-blue-500" />
        Total Returns: {formatter(totalReturns, "sv", "SEK")}
      </h3>
    </div>
  );
}
