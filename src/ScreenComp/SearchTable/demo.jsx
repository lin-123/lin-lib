import { genList, randomNum, randomStr, sleep } from "uc-fun";
import SearchTable from ".";
import { RangePickerDateStr } from "./DateTime";
import { Button } from "antd";
import { useRef } from "react";

const onQueryList = async ({ page, pageSize, ...params }) => {
  console.log('query list: ', page, pageSize, params)
  await sleep(randomNum(1000));
  const list = genList(pageSize, (idx) => ({
    id: pageSize * page + idx,
    taskName: 'taskName' + randomStr(),
    createUser: 'createUser' + randomStr(),
    createTime: 'createTime' + randomStr(),
  }));
  return {
    total: 20,
    list
  };
}

export default () => {
  const searchTableRef = useRef();
  return <SearchTable
    ref={searchTableRef}
    showIndex
    onQueryList={onQueryList}
    formItems={[
      { label: '任务名称', name: 'taskName' },
      { label: '创建时间', name: 'createTime', render: () => <RangePickerDateStr showTime /> },
    ]}
    columns={[
      { title: '任务名称', dataIndex: 'taskName' },
      { title: '创建者', dataIndex: 'createUser' },
      { title: '创建时间', dataIndex: 'createTime' },
      {
        title: '操作',
        render: (_, records) => <Button type="link">
          编辑
        </Button>
      },
    ]}
  />
}