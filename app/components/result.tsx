import { TrendingUp } from "lucide-react";
import { useCalculateGain } from "~/hooks/useCalculateGain";

export function Result() {
  const { totalInvestment, wealthGained, totalReturns } = useCalculateGain();
  return (
    <div className="flex flex-col gap-3 text-md">
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-green-500" />
        Total Investment: {totalInvestment.toLocaleString()} kr
      </h3>
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-purple-500" />
        Total Wealth Gained: {wealthGained.toLocaleString()} kr
      </h3>
      <h3 className="flex items-center gap-2 leading-none font-medium">
        <TrendingUp className="size-4 text-blue-500" />
        Total Returns: {totalReturns.toLocaleString()} kr
      </h3>
    </div>
  );
}
