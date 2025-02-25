// 日期类型查询条件
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { timeFormat } from 'uc-fun';

const CommonPicker = ({ value, ...props }) => {
  const val = value && value[0] ? value.map(i => dayjs(i)) : value;
  return <DatePicker.RangePicker
    {...props}
    value={val}
    style={{ width: '100%' }}
  />;
}
export const RangePickerDateStr = ({ onChange, ...props }) => {
  return <CommonPicker
    {...props}
    onChange={(date, dateStr) => {
      onChange(dateStr);
    }}
  />;
}

const fmt = 'YYYY-MM-DD HH:mm';
// 日期范围转时间戳范围
export function timeRangeToTimestampRange(range) {
  if (range && range.length === 2) {
    return range.map(i => i.valueOf());
  }
}

export function timestampRangeToStr(range) {
  if (!range?.length === 2) return '-';
  return range.map(i => timeFormat(i, fmt)).join('~');
}

export const DATE_TIME_TYPE = 'date';
export function buildDateRangeConfig() {
  return {
    // 数据类型 日期
    type: DATE_TIME_TYPE,
    // formItemRender: () => <RangePickerTimestamp />,
    formItemRender: () => <DatePicker.RangePicker style={{ width: '100%' }} showTime />,
    colRender: (timestamp) => timeFormat(timestamp, fmt)
  };
}