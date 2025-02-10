// 日期函数

import dayjs from "dayjs";

const dateEnum = {
  年: 'year',
  季: 'quarter',
  月: 'month',
  日: 'day'
}
const DATE_FORMAT = 'YYYY-MM-DD';
const today = dayjs();
export function getDateRange(range, substract = 1, fmt = DATE_FORMAT) {
  return [
    today.subtract(substract, dateEnum[range]).format(fmt),
    today.format(fmt)
  ]
}