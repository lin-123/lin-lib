// 玫瑰图
import CommonChart from "./CommonChart";

const getRingBgSeries = (radius, color) => ({
  type: 'pie',
  // 内半径和外半径，决定圆环的宽度
  radius,
  hoverAnimation: false, // 关闭鼠标悬停动画
  label: {
    show: false // 不显示标签
  },
  emphasis: {
    scale: false // 关闭强调时的缩放效果
  },
  data: [{
    value: 100,
    itemStyle: {
      color
    }
  }]
});
/**
 *
 * @param {Array} data [{ value, name }]
 * @returns
 */
export default function RoseChart({
  className, style, data, ...props
}) {
  const chartOptions = {
    tooltip: {
      trigger: 'item',
      show: false
    },
    legend: {
      show: false
    },

    series: [
      // 背景圆环
      getRingBgSeries(['75%', '80%'], 'rgba(25, 61, 126, 1)'),
      getRingBgSeries(['60%', '61%'], 'rgba(255, 255, 255, 0.12)'),
      getRingBgSeries(['50%', '51%'], 'rgba(255, 255, 255, 0.12)'),
      {
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          // borderRadius: 8
        },
        labelLine: {
          showAbove: true,
          length: 6,
          length2: 2
        },
        z: 3,
        data
      },

      getRingBgSeries(['0%', '8%'], '#F3F6FF'),
      getRingBgSeries(['8%', '20%'], '#0080FF'),
      getRingBgSeries(['19%', '20%'], 'rgba(255, 255, 255, 0.22)'),
    ]
  };

  return <CommonChart
    {...{ className, style }}
    option={chartOptions}
    {...props}
  />;
}