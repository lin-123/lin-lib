export const percent = (a, b) => {
  const res = Math.round((a * 10000) / b);
  return `${res / 100}%`;
};

export const isNumber = (x) => Number(x);

export const toFixed = (num, decimal = 2) => {
  if (!isNumber(num)) return num;
  if (decimal) {
    const times = Math.pow(10, decimal);
    const val = Math.round(times * num);
    return val / times;
  }
  return Math.round(num);
}

// times = 倍数
export const randomNum = (times = 1, decimal = 0) => toFixed(Math.random() * times, decimal);

// // 科学技术， 千 万
export function fmtNumber(num) {
  if (num >= 10000) return `${toFixed(num / 10000, 2)}万`;
  // if (num >= 1000) return `${Math.round(num / 100) / 10}千`;
  return num;
  // if (num > 10000) return `${Math.round(num / 10000)}万`;
}
