import { useIntl } from "react-intl";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useCalculateGain } from "~/hooks/useCalculateGain";
import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { messages } from "./messages";

export function ChartPieDonutText() {
  const intl = useIntl();
  const { totalInvestment, totalReturns, wealthGained } = useCalculateGain();
  const currency = useStore((state) => state.currency);

  const chartConfig = {
    totalInvestment: {
      label: intl.formatMessage(messages.totalInvestment),
      color: "var(--color-chrome)",
    },
    wealthGained: {
      label: intl.formatMessage(messages.wealthGained),
      color: "var(--color-safari)",
    },
  } satisfies ChartConfig;

  const chartData = [
    {
      label: "totalInvestment",
      value: totalInvestment,
      fill: "var(--color-chrome)",
    },
    {
      label: "wealthGained",
      value: wealthGained,
      fill: "var(--color-safari)",
    },
  ];

  const formattedTotal = new Intl.NumberFormat(`en-SE`, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
  }).format(totalReturns);

  return (
    <ChartContainer config={chartConfig} className="w-full h-100">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="label"
          innerRadius={110}
          strokeWidth={0}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {formattedTotal}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {intl.formatMessage(messages.totalValue)}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="label" />}
          className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
}
