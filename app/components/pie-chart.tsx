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
import { formatter } from "~/lib/currency-formatter";

const chartConfig = {
  totalInvestment: {
    label: "Total Investment",
    color: "var(--color-chrome)",
  },
  wealthGained: {
    label: "Wealth Gained",
    color: "var(--color-safari)",
  },
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const { totalInvestment, totalReturns, wealthGained } = useCalculateGain();
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
                      {formatter(totalReturns, "sv", "SEK")}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total Value
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
