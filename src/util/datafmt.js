import { randomStr } from "uc-fun";

// ['受理量', '受理率'].map(i => ({ label: i, value: i }))
export const listWord2Options = wordList => wordList.map(i => ({ label: i, value: i }));

export const genList = (len, cb) => new Array(len).fill().map((i, idx) => {
  return cb(idx, randomStr(6));
});
