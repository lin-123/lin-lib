import { makeAutoObservable } from 'mobx';
import { sleep } from 'uc-fun';

class DictStore {
  constructor() {
    makeAutoObservable(this);
  }
  // 数据集合
  dictData = {}
  loadingStatus = {}

  async initDictByCode(code) {
    if (this.loadingStatus[code]) return;

    this.loadingStatus[code] = 'loading';
    const res = await getDictByCode(code);
    const list = res.map(i => ({ label: i.dictCode, value: i.dictValue }));
    this.dictData[code] = list;
    this.loadingStatus[code] = 'ready';
  }
}

export default new DictStore();

function getDictByCode(code) {
  return sleep(300).then(() => [
    { dictCode: `${code}-1`, dictValue: 1 },
    { dictCode: `${code}-2`, dictValue: 2 },
    { dictCode: `${code}-3`, dictValue: 3 },
  ])
}