// list = [
//   { value: 40, name: '长风湾综合网格' },
//   { value: 65, name: '中北网格' },
//   { value: 89, name: '白兰网格' },
//   { value: 20, name: '白玉网格' },
//   { value: 70, name: '盘湾里网格' },
//   { value: 100, name: '枣阳网格' },
// ]

import RoseChart from "@/ReactECharts/RoseChart";
import styles from './index.module.less';
// import { Tag } from "@/components/Indicator";
import { useEffect, useState } from "react";
import classNames from "classnames";

const mockdata = [
  { value: 40, name: '长风湾', tb: 10, hb: 56 },
  { value: 65, name: '中北', tb: 88, hb: 78 },
  { value: 89, name: '白兰', tb: 80, hb: 65 },
  { value: 20, name: '白玉', tb: 16, hb: 88 },
  { value: 70, name: '盘湾里', tb: 10, hb: 12 },
  { value: 100, name: '枣阳', tb: 60, hb: 11 },
]
/**
 * @param {string} type 当前数据类型，展示在右侧内容区： 已受理
 *
 * data = [{ value, name, tb, hb }]
 * middle: 中屏尺寸
 * */
export default function RoseChartPT({ className, type, data = mockdata, middle }) {
  const [selected, setSeletected] = useState({});

  useEffect(() => {
    if (!data?.length) return;

    setSeletected(data[0]);
  }, [data])
  return  <div className={classNames(styles.chart, middle && styles.middle, className)}>
    <RoseChart
      style={middle ? { height: 231, width: 285 } : { width: 343, height: 262 }}
      data={data}
      onEvents={{
        click: (params) => {
          setSeletected(params.data);
        }
      }}
    />
    <div className={styles.acceptTooltip}>
      <div className={styles.title}>{selected.name}</div>
      <div className={styles.info}>
        <div className={styles.line1}>
          <span>{type || '已受理'}</span>
          {selected.value}件
          {/* <Tag num={selected.value} unit="件" size="normal" /> */}
        </div>
        <div className={styles.divider}></div>
        <span>同比 / 环比</span>
        <span className="highlight">
          +{selected.tb}% / -{selected.hb}%
        </span>
        <div className={styles.line}></div>
      </div>
    </div>
  </div>
}