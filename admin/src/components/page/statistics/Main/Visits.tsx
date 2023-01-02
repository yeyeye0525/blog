import { useEffect, useRef } from "react";
import type { FC } from "react";
import * as echarts from "echarts";
import vw from "@/utils/vw";
import type { propsType } from "./index";

/** 访问量统计*/
const Visits: FC<{ visits: propsType["visits"] }> = ({ visits }) => {
  let DOM = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let myChart = echarts.init(DOM.current as HTMLElement);
    myChart.setOption({
      title: {
        text: "文章阅读量",
        textStyle: {
          fontSize: vw(20),
          color: "white",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      grid: {
        top: vw(40),
        left: vw(15),
        right: vw(20),
        bottom: vw(15),
        containLabel: true,
      },
      textStyle: {
        fontSize: vw(14),
        color: "white",
      },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: visits.map(item => item.time),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "阅读数",
          type: "line",
          data: visits.map(item => item.view_count),
          itemStyle: {
            color: "red",
          },
        },
        {
          name: "IP数",
          type: "line",
          data: visits.map(item => item.ip_count),
          itemStyle: {
            color: "yellow",
          },
        },
      ],
    });
  }, [visits]);
  return (
    <>
      <div ref={DOM} className="w-full h-full main-l"></div>
    </>
  );
};
export default Visits;
