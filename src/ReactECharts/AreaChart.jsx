import AxisChart from "./AxisChart";

// 面积图
const areaSeriesOpt = {
  type: 'line',
  showSymbol: false,
  lineStyle: {
    color: '#FFCA0E'
  },

  areaStyle: {
    // color: '#0063FF',
    shadowColor: '#0063FF',
    shadowOffsetY: -100
  },
}

export default function AreaChart({
  datasource, series, ...props
}) {
  return <AxisChart
    datasource={datasource}
    {...props}
    option={{
      grid: {
        top: 15,
        bottom: 10
      }
    }}
    series={series.map(i => ({ ...areaSeriesOpt, ...i }))}
  />;
}