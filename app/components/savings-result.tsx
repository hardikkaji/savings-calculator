import { useIntl } from "react-intl";
import { Wallet, TrendingUp, BarChart3 } from "lucide-react";
import { Card } from "./ui/card";
import { useCalculateGain } from "~/hooks/useCalculateGain";
import { useCurrencyFormatter } from "~/hooks/useCurrencyFormatter";
import { messages } from "./messages";

export function SavingsResult() {
  const intl = useIntl();
  const { totalInvestment, wealthGained, totalValue } = useCalculateGain();
  const { format } = useCurrencyFormatter();

  return (
    <div className="w-full">
      <Card className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Wallet className="h-8 w-8 text-zinc-600" />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              {intl.formatMessage(messages.totalInvestment)}
            </p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {format(totalInvestment)}
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              {intl.formatMessage(messages.totalWealthGained)}
            </p>
            <p className="text-2xl font-bold text-green-600">
              {format(wealthGained)}
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              {intl.formatMessage(messages.totalValue)}
            </p>
            <p className="text-2xl font-bold text-blue-600">
              {format(totalValue)}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
