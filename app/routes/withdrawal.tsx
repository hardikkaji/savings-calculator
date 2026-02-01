import type { Route } from "./+types/withdrawal";
import { WithdrawalForm } from "~/components/withdrawal-form";
import { WithdrawalResult } from "~/components/withdrawal-result";
import { WithdrawalBreakdownTable } from "~/components/withdrawal-breakdown-table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Monthly Withdrawal Calculator" },
    {
      name: "description",
      content: "Welcome to monthly withdrawal calculator!",
    },
  ];
}

export default function Withdrawal() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">
        Monthly Withdrawal Calculator
      </h1>
      <div className="flex flex-col gap-8 mb-6 lg:flex-row lg:items-center">
        <WithdrawalForm />
      </div>
      <div className="flex justify-center mb-8">
        <WithdrawalResult />
      </div>
      <div className="flex justify-center">
        <WithdrawalBreakdownTable />
      </div>
    </div>
  );
}
