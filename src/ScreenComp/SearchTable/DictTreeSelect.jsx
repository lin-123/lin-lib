import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';

/**
 *
 * @param {(pid) => Array<{id, pId,value,title}>} onLoad
 * @returns
 */
const DictTreeSelect = ({ onLoad, ...props }) => {
  const [treeData, setTreeData] = useState([]);
  const onLoadData = async (node) => {
    const list = await onLoad(node);
    if (!list?.length) return;

    setTreeData(pre => pre.concat(list));
  }

  useEffect(() => {
    onLoadData();
  }, []);
  return (
    <TreeSelect
      allowClear
      treeDataSimpleMode
      {...props}
      style={{
        width: '100%',
      }}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default React.memo(DictTreeSelect);