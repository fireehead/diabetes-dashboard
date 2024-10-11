import Image from "next/image";
import { AreaChartStacked } from "./charts/area-chart-stacked";
import { BarChartMultiple } from "./charts/bar-chart-multiple";
import { PieChartText } from "./charts/pie-chart-text";
import { RadarChartLines } from "./charts/radar-chart-lines";
import { LineChartInteractive } from "./charts/line-chart-interactive";

export default function Home() {
  return (
    <div className="p-8">
      <h2 className="text-2xl">Charts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 ">
        <AreaChartStacked />
        <BarChartMultiple />
        <LineChartInteractive />
        <PieChartText />
        <RadarChartLines />
      </div>
    </div>
  );
}
