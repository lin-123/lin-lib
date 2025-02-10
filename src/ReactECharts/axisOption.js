// x y 坐标轴图形通用配置
import { fontSize } from "./CommonChart";

const axisLabel = {
  fontSize,
  color: '#FFFFFFA6',
  fontWeight: 'bold',
  margin: 4,
};

export const axisOption = {
  xAxis: {
    type: 'category',
    axisLabel,
    axisTick: {
      show: false  // 控制 y 轴刻度线不显示
    },
    // boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.40)',
      }
    },
  },
  yAxis: {
    axisLabel,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.40)'
      }
    },
    splitLine: {
      showMinLine: false,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.40)'
      }
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: 26,
    bottom: 26,
    right: 0,

  },
  legend: {
    top: 0,
    right: 'center'
  },
  dataset: {},
  series: []
}
