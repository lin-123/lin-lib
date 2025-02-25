import { Select } from 'antd';
import { useMemo } from 'react';

/**
 * 扩展自 Ant Design 的 Select 组件，用于创建一个数字选择器。
 * 此组件允许用户从指定的数字范围中选择一个数字，并支持手动输入。
 *
 * @param {number} min - 数字范围的最小值。
 * @param {number} max - 数字范围的最大值。
 * @param {string} unit - 数字的单位，例如 "kg"、"m" 等。
 * @param {number} value - 当前选中的值。
 * @param {function} onChange - 当选中值发生变化时调用的回调函数。
 * @param {Object} [props] - 其他传递给 Ant Design Select 组件的属性。
 */
export default function NumberSelect({ min, max, unit, value, onChange, ...props }) {
  // select mode=tags 情况下 value option.value 都需要是字符串， 因为用户可以手动输入，输入的值就是字符串
  const options = useMemo(() => {
    const res = [];
    for (let i = min; i <= max; i++) {
      res.push({ label: `${i}${unit}`, value: `${i}` })
    }
    return res;
  }, [min, max]);

  // maxCount 1
  const extProps = {
    value: value ? [`${value}`] : [],
    onChange: (val) => {
      const target = Number(val[val.length - 1]);
      onChange && onChange(target || null);
    }
  };

  return <Select
    mode="tags"
    style={{ width: '100%' }}
    options={options}
    {...extProps}
    {...props}
  />;
}