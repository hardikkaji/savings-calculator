import type { Route } from "./+types/home";
import { MonthlySavingsForm } from "~/components/monthly-savings-form";
import { ChartPieDonutText } from "~/components/pie-chart";
import { SavingsResult } from "~/components/savings-result";
import { MonthlyBreakdownTable } from "~/components/monthly-breakdown-table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Montly Savings Calculator" },
    { name: "description", content: "Welcome to montly savings calculator!" },
  ];
}

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">Monthly Savings Calculator</h1>
      <div className="flex flex-col gap-8 mb-6 lg:flex-row lg:items-center">
        <MonthlySavingsForm />
        <ChartPieDonutText />
      </div>
      <div className="flex justify-center mb-8">
        <SavingsResult />
      </div>
      <div className="w-full">
        <MonthlyBreakdownTable />
      </div>
    </div>
  );
}
