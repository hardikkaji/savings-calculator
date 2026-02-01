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
import { useCurrencyFormatter } from "~/hooks/useCurrencyFormatter";

export function WithdrawalBreakdownTable() {
  const { monthlyData } = useWithdrawalBreakdown();
  const { format } = useCurrencyFormatter();

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
                  {format(row.balance)}
                </TableCell>
                <TableCell className="text-right text-orange-600">
                  {format(row.withdrawal)}
                </TableCell>
                <TableCell className="text-right text-green-600">
                  {format(row.interest)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="text-center font-semibold">Total</TableCell>
              <TableCell className="text-right"></TableCell>
              <TableCell className="text-right font-semibold text-orange-600">
                {format(totalWithdrawal)}
              </TableCell>
              <TableCell className="text-right font-semibold text-green-600">
                {format(totalInterest)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
}
