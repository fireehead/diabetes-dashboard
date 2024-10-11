import { AreaChartStacked } from "@/app/charts/area-chart-stacked";
import { BarChartMultiple } from "@/app/charts/bar-chart-multiple";
import { LineChartInteractive } from "@/app/charts/line-chart-interactive";
import { PieChartText } from "@/app/charts/pie-chart-text";
import { RadarChartLines } from "@/app/charts/radar-chart-lines";
import React from "react";

export default function Stats(){
    return (
        <div>
            <AreaChartStacked />
            <BarChartMultiple />
            <LineChartInteractive />
            <PieChartText />
            <RadarChartLines />
        </div>
    )
}