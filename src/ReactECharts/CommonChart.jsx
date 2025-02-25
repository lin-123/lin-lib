import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import * as echarts from 'echarts';
import { Empty } from 'antd';
import { sleep } from 'uc-fun';
import { fontSize, myTheme } from './myTheme.js';

export { fontSize };
/**
 * @param {object} onEvents { [eventName]: handler }
 *  详情参考 https://echarts.apache.org/handbook/zh/concepts/event/
 * */
const CommonChart = ({
  className, style, option, defaultOption, onEvents,
}, ref) => {
  const chartRef = useRef(null);
  const chartInst = useRef(null);

  useImperativeHandle(ref, () => ({
    getEchartsInstance: () => chartInst.current
  }));
  useEffect(() => {
    // 初始化 ECharts 实例
    const chartInstance = echarts.init(chartRef.current, myTheme);
    chartInst.current = chartInstance;
    if (defaultOption) {
      chartInst.current.setOption(defaultOption);
    }
    // 监听窗口大小变化，调整图表大小
    window.addEventListener('resize', chartInstance.resize);
    sleep(10).then(chartInstance.resize);

    // action = 'on|off'
    const dealEvents = (action) => {
      if (!onEvents) return;
      Object.entries(onEvents).forEach(([eventName, handler]) => {
        chartInstance[action](eventName, handler);
      });
    }
    dealEvents('on');

    // 清理函数，销毁实例
    return () => {
      window.removeEventListener('resize', chartInstance.resize);
      dealEvents('off');
      chartInstance.dispose();
    };
  }, []);

  useEffect(() => {
    if (!option) return;
    chartInst.current.setOption(option);
  }, [option]);

  if (!option) return <Empty />;
  // return (<div style={px2rem(style)} className={className}>
  return (<div style={style} className={className}>
    <div
      ref={chartRef}
      style={{ width: '100%', height: '100%' }}
    />
  </div>);
};

export default forwardRef(CommonChart);
