/* eslint-disable */
import { observer } from 'mobx-react-lite';
import { useMount } from 'ahooks';
import { Select } from 'antd';
import dictStore from './dictStore';

const useDict = (code) => {
  const options = dictStore.dictData[code];
  useMount(() => {
    if (!options) dictStore.initDictByCode(code);
  });
  return options || [];
}

export const DictSelect = observer(({ code, ...props }) => {
  const options = useDict(code);

  return <Select
    allowClear
    mode="multiple"
    options={options || []}
    optionFilterProp='label'
    {...props}
  />
});

// 字段文本， value to label
export const DictSpan = observer(({ code, value }) => {
  const options = useDict(code);
  const opt = options.find(i => `${i.value}` === `${value}`);
  return <span>{opt?.label || value}</span>
});
