export const fontSize = '1.4rem';
// 初始化 ECharts 实例
export const textStyle = {
  color: '#FFFFFF',
  fontSize,
};
export const myTheme = {
  color: [
    '#3CF0E1', '#FF7373', '#FFC674',  '#3CA5F0', '#3C7DFA', '#4D00FF'
  ],

  textStyle,
  legend: {
    textStyle,

    itemWidth: 4,
    itemHeight: 4,
    padding: 0,
    itemGap: 4,
  },
  label: {
    // fontWeight: 'bold',
    textBorderColor: 'none',
    color: 'white'
  },
  bar: {
    barWidth: 10,
    itemStyle: {
      // color: '#71f8ff9b'
    }
  },
};
