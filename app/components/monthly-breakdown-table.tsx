import { useIntl } from "react-intl";
import { useShallow } from "zustand/shallow";
import { useStore } from "~/useStore";
import { useMonthlyBreakdown } from "~/hooks/useMonthlyBreakdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "~/components/ui/table";
import { messages } from "./messages";

export function MonthlyBreakdownTable() {
  const intl = useIntl();
  const currency = useStore(
    useShallow((state) => ({
      currency: state.currency,
    })),
  ).currency;

  const { monthlyData, totals } = useMonthlyBreakdown();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(`en-SE`, {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Monthly Breakdown</h2>
      <div className="overflow-x-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead className="text-right">Starting Balance</TableHead>
              <TableHead className="text-right">Investment</TableHead>
              <TableHead className="text-right">Returns</TableHead>
              <TableHead className="text-right">Ending Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {monthlyData.map((row) => (
              <TableRow key={row.month}>
                <TableCell className="font-medium">{row.month}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.startingBalance)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(row.investment)}
                </TableCell>
                <TableCell className="text-right text-green-600 font-medium">
                  {formatCurrency(row.returns)}
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {formatCurrency(row.endingBalance)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-muted/50">
              <TableCell colSpan={1} className="font-semibold">
                Total
              </TableCell>
              <TableCell className="text-right">—</TableCell>
              <TableCell className="text-right font-semibold">
                {formatCurrency(totals.totalInvestment)}
              </TableCell>
              <TableCell className="text-right font-semibold text-green-600">
                {formatCurrency(totals.totalReturns)}
              </TableCell>
              <TableCell className="text-right font-bold">
                {formatCurrency(totals.finalBalance)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
