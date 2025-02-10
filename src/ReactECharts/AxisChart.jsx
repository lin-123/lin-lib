// 基于 dataset 的 echarts 组件
import { axisOption } from "./axisOption";
import CommonChart from "./CommonChart";

export default function AxisChart({ style, datasource, series, option, ...props }) {

  return <CommonChart
    {...props}
    defaultOption={axisOption}
    style={style}
    option={{
      ...option,
      dataset: { source: datasource || [] },
      series: series.map(({ type = 'line', x = 'x', y, ...ext }) => ({
        // type echarts 的 series 类型， 如： 'line|bar'
        type,
        encode: {
          x, y
        },
        ...ext
      }))
    }}

  />
}
