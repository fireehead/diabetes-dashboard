"use client";

import { useState } from "react";
import { TrendingUp, Eye, EyeOff } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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

export const description = "A radar chart showing patient revisits between pre-diabetic and diabetic patients";

// const chartData = [
//   { month: "January", preDiabetic: 100, diabetic: 120 },
//   { month: "February", preDiabetic: 110, diabetic: 130 },
//   { month: "March", preDiabetic: 120, diabetic: 140 },
//   { month: "April", preDiabetic: 115, diabetic: 135 },
//   { month: "May", preDiabetic: 130, diabetic: 150 },
//   { month: "June", preDiabetic: 125, diabetic: 160 },
// ];

const chartConfig = {
  preDiabetic: {
    label: "Pre-Diabetic",
    color: "hsl(var(--chart-5))",
  },
  diabetic: {
    label: "Diabetic",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig;

export function RadarChartLines() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  if (!isVisible) return null;

  return (
    <Card>
      <CardHeader className="items-center pb-4 relative">
        <CardTitle>Pre-Diabetic vs Diabetic Revisits</CardTitle>
        <CardDescription>
          Showing patient revisits for the last 6 months
        </CardDescription>

        <button
          onClick={toggleVisibility}
          className="absolute top-0 right-0 p-2"
          aria-label="Toggle chart visibility"
        >
          {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </CardHeader>


        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <RadarChart data={chartData.preDiabeticVsDiabeticRevisits}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <PolarAngleAxis dataKey="month" />
              <PolarGrid radialLines={false} />
              <Radar
                dataKey="preDiabetic"
                fill="var(--color-preDiabetic)"
                fillOpacity={0}
                stroke="var(--color-preDiabetic)"
                strokeWidth={2}
              />
              <Radar
                dataKey="diabetic"
                fill="var(--color-diabetic)"
                fillOpacity={0}
                stroke="var(--color-diabetic)"
                strokeWidth={2}
              />
            </RadarChart>
          </ChartContainer>
        </CardContent>


      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
