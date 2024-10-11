"use client";

import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import chartData from './chartData.json';

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
import { useState } from "react";

export const description = "A multiple bar chart showing online and in-person enrollments";

// const chartData = [
//   { month: "January", online: 120, inPerson: 90 },
//   { month: "February", online: 150, inPerson: 100 },
//   { month: "March", online: 130, inPerson: 95 },
//   { month: "April", online: 160, inPerson: 110 },
//   { month: "May", online: 180, inPerson: 105 },
//   { month: "June", online: 200, inPerson: 120 },
// ];

const chartConfig = {
  online: {
    label: "Online Enrollments",
    color: "hsl(var(--chart-6))",
  },
  inPerson: {
    label: "In-Person Enrollments",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function BarChartMultiple() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>Online vs In-Person Enrollments</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
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
            <BarChart accessibilityLayer data={chartData.onlineInPersonEnrollments}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="online" fill="var(--color-online)" radius={4} />
              <Bar dataKey="inPerson" fill="var(--color-inPerson)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      )}
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total enrollments for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
