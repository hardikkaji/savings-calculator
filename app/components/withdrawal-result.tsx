import { useIntl } from "react-intl";
import { Card } from "./ui/card";
import { useCalculateWithdrawal } from "~/hooks/useCalculateWithdrawal";
import { useCurrencyFormatter } from "~/hooks/useCurrencyFormatter";

export function WithdrawalResult() {
  const intl = useIntl();
  const metrics = useCalculateWithdrawal();
  const { format } = useCurrencyFormatter();

  return (
    <div className="w-full">
      <Card className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Total Investment
            </p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {format(metrics.totalInvestment)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Total Withdrawal
            </p>
            <p className="text-2xl font-bold text-orange-600">
              {format(metrics.totalWithdrawal)}
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
              {format(metrics.finalValue)}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
