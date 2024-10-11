"use client";

import * as React from "react";
import { TrendingUp, Eye, EyeOff } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart showing revenue through various diabetes management programs";

const chartData = [
  { program: "Obesity", revenue: 3000, fill: "var(--color-obesity)" },
  { program: "Prediabetes", revenue: 2000, fill: "var(--color-prediabetes)" },
  { program: "Behavioral Health", revenue: 3500, fill: "var(--color-behavioral)" },
  { program: "Physical Activity", revenue: 2500, fill: "var(--color-physical)" },
  { program: "Nutrition", revenue: 4000, fill: "var(--color-nutrition)" },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  obesity: {
    label: "Obesity",
    color: "hsl(var(--chart-5))",
  },
  prediabetes: {
    label: "Prediabetes",
    color: "hsl(var(--chart-8))",
  },
  behavioral: {
    label: "Behavioral Health",
    color: "hsl(var(--chart-6))",
  },
  physical: {
    label: "Physical Activity",
    color: "hsl(var(--chart-7))",
  },
  nutrition: {
    label: "Nutrition",
    color: "hsl(var(--chart-9))",
  },
} satisfies ChartConfig;

export function PieChartText() {
  const [isVisible, setIsVisible] = React.useState(true); 

  const totalRevenue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.revenue, 0);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0 relative">
        <CardTitle>Revenue by Program</CardTitle>
        <CardDescription>January - June 2024</CardDescription>

        <button
          onClick={toggleVisibility}
          className="absolute top-0 right-0 p-2"
          aria-label="Toggle chart visibility"
        >
          {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </CardHeader>

      {isVisible && (
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="revenue"
                nameKey="program"
                innerRadius={60}
                strokeWidth={5}
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
                            {`$${totalRevenue.toLocaleString()}`}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Total Revenue
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      )}

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing revenue for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
