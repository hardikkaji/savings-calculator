import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { Card } from "./ui/card";
import { useCalculateWithdrawal } from "~/hooks/useCalculateWithdrawal";

export function WithdrawalResult() {
  const currency = useStore((state) => state.currency);
  const language = useStore((state) => state.language);

  const metrics = useCalculateWithdrawal();
  const currencySymbol = currencySymbols[currency] || "kr";

  const formatter = new Intl.NumberFormat(
    language === "sv" ? "sv-SE" : "en-US",
    {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    },
  );

  return (
    <div className="w-full">
      <Card className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Total Investment
            </p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {formatter.format(metrics.totalInvestment)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Total Withdrawal
            </p>
            <p className="text-2xl font-bold text-orange-600">
              {formatter.format(metrics.totalWithdrawal)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Final Value
            </p>
            <p
              className={`text-2xl font-bold ${
                metrics.finalValue > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {formatter.format(metrics.finalValue)}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
