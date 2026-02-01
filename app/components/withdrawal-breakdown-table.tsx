import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "./ui/table";

import { useWithdrawalBreakdown } from "~/hooks/useWithdrawalBreakdown";

export function WithdrawalBreakdownTable() {
  const currency = useStore((state) => state.currency);
  const language = useStore((state) => state.language);
  const { monthlyData } = useWithdrawalBreakdown();

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

  const totalWithdrawal = monthlyData.reduce(
    (sum, row) => sum + row.withdrawal,
    0,
  );
  const totalInterest = monthlyData.reduce((sum, row) => sum + row.interest, 0);

  return (
    <div className="w-full">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Month</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead className="text-right">Withdrawal</TableHead>
              <TableHead className="text-right">Interest Earned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {monthlyData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{row.month}</TableCell>
                <TableCell className="text-right">
                  {formatter.format(row.balance)}
                </TableCell>
                <TableCell className="text-right text-orange-600">
                  {formatter.format(row.withdrawal)}
                </TableCell>
                <TableCell className="text-right text-green-600">
                  {formatter.format(row.interest)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="text-center font-semibold">Total</TableCell>
              <TableCell className="text-right"></TableCell>
              <TableCell className="text-right font-semibold text-orange-600">
                {formatter.format(totalWithdrawal)}
              </TableCell>
              <TableCell className="text-right font-semibold text-green-600">
                {formatter.format(totalInterest)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
}
