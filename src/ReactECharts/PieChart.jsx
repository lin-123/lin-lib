// 饼图
import { useEffect, useRef } from "react";
import CommonChart from "./CommonChart";

const chartOption = {
  tooltip: {
    trigger: 'item',
    // show: false
  },
  legend: {
    bottom: 10,
    left: 'center',
    width: 100,
  },
  series: [{
    type: 'pie',
    radius: [0, '70%'],
    center: ['50%', '35%'],
    label: {
      show: false,
      position: 'center'
    },
    emphasis: {
      // label: {
      //   show: true,
      // }
    },
    labelLine: {
      show: false
    },
    data: []
  }],
};
export function RingChart({ className, style, data, option, seriesOpt, animation }) {
  return <PieChart
    seriesOpt={{
      radius: ['35%', '60%'],
      emphasis: {
        label: {
          show: true,
        }
      },
      ...seriesOpt
    }}
    {...{ className, style, option, data, animation }}
  />
}

/**
 *
 * @param {Array} data [{ value, name }]
 * @returns
 */
export default function PieChart({
  className, style, data, option, seriesOpt,
  animation
}) {
  const chartRef = useRef();
  useAnimation({ animation, chartRef, maxLen: data.length });
  return <CommonChart
    ref={chartRef}
    defaultOption={chartOption}
    option={{
      ...option,
      series: [{
        ...seriesOpt,
        data
      }]
    }}
    {...{ className, style }}
  />;
}

function useAnimation({ animation, chartRef, maxLen }) {
  useEffect(() => {
    if (!animation) return;
    const chartInst = chartRef.current.getEchartsInstance();
    // 自动轮播逻辑
    let currentIndex = 0;
    const dispatchAction = (type, dataIndex) => {
      // 高亮当前扇区
      chartInst.dispatchAction({
        type,
        seriesIndex: 0,
        dataIndex
      });
    }
    let timer;

    const run = () => {
      dispatchAction('highlight', currentIndex);
      timer = setInterval(function () {
        // 取消上一个高亮的扇区
        dispatchAction('downplay', currentIndex);
        currentIndex = (currentIndex + 1) % maxLen;
        dispatchAction('highlight', currentIndex);
      }, 2000); // 每 2 秒切换一次
    }
    run();

    const clear = () => {
      dispatchAction('downplay', currentIndex);
      clearInterval(timer);
    }
    // 当鼠标悬停在饼图上时，暂停轮播
    chartInst.on('mouseover', clear);

    // 当鼠标移出饼图时，恢复轮播
    chartInst.on('mouseout', () => {
      run();
    });
    return () => clear();
  }, [animation]);
}