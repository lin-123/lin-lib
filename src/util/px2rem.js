// import { baseSize } from "@/rem";
import { isNumber } from "./number";

const baseSize = 10;
const cssAttr = [
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'top',
  'bottom',
  'left',
  'right',
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'fontSize',
  'gap'
].reduce((pre, attr) => Object.assign(pre, { [attr]: true }), {});

export const pxnum2rem = (px) => {
  if (isNumber(px)) {
    return `${px / baseSize}rem`;
  }
  return px;
};

// style px 2 rem
export const px2rem = (obj) => {
  if (!obj) return {};
  const res = { ...obj };
  Object.entries(res).forEach(([key, val]) => {
    if (cssAttr[key]) {
      res[key] = pxnum2rem(val);
    }
  });
  // console.log(res, 'px2rem........');
  return res;
};

export function getRemFontSize() {
  const rootFontSize = document.documentElement.style.fontSize.replace('px', '');
  const fontSize = isNumber(+rootFontSize) ? rootFontSize : 14;
  return fontSize;
}

export function getRelativePX(px) {
  // FONT_SIZE from rem.js
  return (px * window.FONT_SIZE) / baseSize;
}

export function getRelativeSize({ width, height }) {
  return { width: getRelativePX(width), height: getRelativePX(height) };
}

// // 科学技术， 千 万
// export function fmtNumber(num) {
//   if (num >= 10000) return `${Math.round(num / 1000) / 10}万`;
//   if (num >= 1000) return `${Math.round(num / 100) / 10}千`;
//   return num;
//   // if (num > 10000) return `${Math.round(num / 10000)}万`;
// }
