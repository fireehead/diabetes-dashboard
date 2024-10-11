"use client";

import { useState } from "react";
import { TrendingUp, Eye, EyeOff } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "An area chart showing trends in medication and counseling sessions";

const chartData = [
  { month: "January", medication: 150, counseling: 100 },
  { month: "February", medication: 180, counseling: 20 },
  { month: "March", medication: 90, counseling: 150 },
  { month: "April", medication: 200, counseling: 140 },
  { month: "May", medication: 170, counseling: 125 },
  { month: "June", medication: 190, counseling: 150 },
];

const chartConfig = {
  medication: {
    label: "Medication",
    color: "hsl(var(--chart-5))",
  },
  counseling: {
    label: "Counseling",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig;

export function AreaChartStacked() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>Medication and Counseling Trends</CardTitle>
        <CardDescription>
          Showing total number of patients who underwent medication and counseling for the last 6 months
        </CardDescription>
        <button
          onClick={toggleVisibility}
          className="absolute top-0 right-2 p-4"
          aria-label="Toggle chart visibility"
        >
          {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </CardHeader>

      {isVisible && (
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillMedication" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-medication)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-medication)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillCounseling" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-counseling)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-counseling)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="medication"
                type="natural"
                fill="url(#fillMedication)"
                fillOpacity={0.4}
                stroke="var(--color-medication)"
                stackId="a"
              />
              <Area
                dataKey="counseling"
                type="natural"
                fill="url(#fillCounseling)"
                fillOpacity={0.4}
                stroke="var(--color-counseling)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      )}
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
