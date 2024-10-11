import { AreaChartStacked } from "@/app/charts/area-chart-stacked";
import { BarChartMultiple } from "@/app/charts/bar-chart-multiple";
import { PieChartText } from "@/app/charts/pie-chart-text";
import { RadarChartLines } from "@/app/charts/radar-chart-lines";
import React from "react";

export default function Stats(){
    return (
        <div className="charts-container grid grid-cols-1 md:grid-cols-2 gap-4" >
            <AreaChartStacked />
            <BarChartMultiple />
            <PieChartText />
            <RadarChartLines />
        </div>
    )
}