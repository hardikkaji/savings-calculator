import type { Route } from "./+types/home";
import { MonthlySavingsForm } from "~/components/monthly-savings-form";
import { ChartPieDonutText } from "~/components/pie-chart";
import { Result } from "~/components/result";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Saving Calculator" },
    { name: "description", content: "Welcome to savings calculator" },
  ];
}

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">Monthly Savings Calculator</h1>
      <div className="flex flex-row gap-8 mb-6 sm:flex-col lg:flex-row lg:items-center">
        <MonthlySavingsForm />
        <ChartPieDonutText />
      </div>
      <div className="flex justify-center">
        <Result />
      </div>
    </div>
  );
}
