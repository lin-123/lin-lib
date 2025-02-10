# echarts

`npm i echarts`

## AxisChart
使用 dataset 方式组织 Echarts 代码
```jsx
import AxisChart from './AxisChart.jsx';

export default () => {
  const data = [
    { value: 40, name: '长风湾', tb: 10, hb: 56 },
    { value: 65, name: '中北', tb: 88, hb: 78 },
    { value: 89, name: '白兰', tb: 80, hb: 65 },
    { value: 20, name: '白玉', tb: 16, hb: 88 },
    { value: 70, name: '盘湾里', tb: 10, hb: 12 },
    { value: 100, name: '枣阳', tb: 60, hb: 11 },
  ];
  return <AxisChart
      style={{ height: 200, background: 'black', padding: 20 }}
      datasource={data}
      series={[
        { x: 'name', y: 'value', name: '工单数量', type: 'bar' },
        { x: 'name', y: 'tb', name: '同比' },
        { x: 'name', y: 'hb', name: '环比' },
      ]}
      option={{
        xAxis: {
          axisLabel: {
            // 格式化 X 轴标签文本
            // formatter: function (value) {
            //     if (value.length > 5) {
            //         return value.slice(0, 5);
            //     }
            //     return value;
            // },
            // rotate: -30
          }
        }
      }}
    />
}
```

## PieChart
```jsx
import PieChart, { RingChart } from './PieChart.jsx'
export default () => {
  const data = [
    { name: '住宿', value: 162 },
    { name: '批发', value: 94 },
    { name: '居民', value: 42 },
    { name: '房地产', value: 5 },
    { name: '教育', value: 6 }
  ];
  return <div
    style={{
      display: 'flex',
      background: 'black',
      padding: 20
    }}
  >
    <RingChart
      style={{ height: 200, flex: '1 0 auto' }}
      animation
      option={{
        legend: {
          show: false,
          // left: 'right'
        }
      }}
      seriesOpt={{
        radius: ['50%', '80%'],
        center: ['50%', '50%']
      }}
      data={data}
    />

    <PieChart
      style={{ height: 200, flex: '1 0 auto' }}
      data={data}
      option={{
        legend: {
          bottom: 20,
          left: 'center',
          width: 200
        }
      }}
    />
  </div>;
}
```

## RoseChart 玫瑰图

<code src="./demos/RoseChartPT"></code>