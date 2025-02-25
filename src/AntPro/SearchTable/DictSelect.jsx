// 枚举类型 select
import { getResourceList } from '@/service';
import { Select } from 'antd';
import React, { useEffect, useState } from 'react';

export const DICT_CODE = {
  eventResource: 'eventResource',
  sourceType: 'sourceType'
}

const dictServer = {
  [DICT_CODE.eventResource]: getResourceList,
}

const cacheOpts = {
  // ...dictStore
};
export function DictSelect({ code, ...props }) {
  const [options, setOptions] = useState(cacheOpts[code] || []);
  useEffect(() => {
    if (options.length) return;

    const request = dictServer[code];
    if (!request) return;
    request().then(res => {
      setOptions(res);
      cacheOpts[code] = res;
    }).catch(e => {

    })
  }, []);
  return <Select allowClear options={options} {...props} />
}
