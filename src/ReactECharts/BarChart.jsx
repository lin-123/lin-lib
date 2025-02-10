import CommonChart from './CommonChart';

/**
 * dataset = [
 *  { name, y1, y2 }
 * ]
 *
 * series = [
 *  { title, dataIndex }
 * ]
 */
export default function BarChart({
  style,
  className,
  dataset,
  series,
  xDataIndex = 'name',
}) {
  const legend =
    series.length > 1
      ? {
          data: series.map((i) => i.title),
          right: 10,
        }
      : {
        show: false
      };
  return (
    <CommonChart
      style={style}
      className={className}
      option={{
        color: ['#006BFD', '#00FFB2'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend,
        grid: {
          // left: 24,
          // right: 16,
          // top: 32,
          // bottom: 16,
        },
        xAxis: {
          type: 'category',
          data: dataset.map((i) => i[xDataIndex]),
          // axisLabel: {
          //   rotate: 45,
          // },
        },
        yAxis: {
          type: 'value',
          name: '单位：次',
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        dataset: {
          source: dataset,
        },
        series: series.map((i) => ({
          type: 'bar',
          stack: '总量',
          name: i.title,
          encode: {
            x: 'name',
            y: i.dataIndex,
          },
          // barWidth: 19,
        })),
      }}
    />
  );
}
