// 数字跳动组件
import { useEffect } from "react";
import { useState } from "react";
import { isNumber, toFixed } from "uc-fun";

const DynamicNum = ({ className, style, num, duration, loopDuration }) => {
  const [curNum, setCurNum] = useState('--');

  useEffect(() => {
    if (!isNumber(num)) {
      setCurNum('--');
      return;
    }
    let timer;
    let timeoutTimer;
    const tickNum = () => {
      const step = num / 20;
      let cur = 0;
      const isInt = Number.isInteger(+num);
      timer = setInterval(() => {
        cur += step;
        if (cur > num) {
          clearInterval(timer);
          // 循环轮播
          timeoutTimer = setTimeout(tickNum, loopDuration || 10000);
          cur = num;
        }
        setCurNum(toFixed(cur, isInt ? 0 : 2));
      }, duration || 50);
    }
    tickNum();
    return () => {
      clearInterval(timer);
      clearTimeout(timeoutTimer);
    };
  }, [num]);
  return <strong className={className} style={style}>{curNum}</strong>
}

export default DynamicNum;
