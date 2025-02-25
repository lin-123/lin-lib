import { usePagination } from 'ahooks';
import { Table, message } from 'antd';
import { forwardRef, useEffect, useImperativeHandle } from 'react';

export const getIndexColumn = (current, pageSize) => {
  return {
    title: '序号',
    dataIndex: 'index',
    width: 80,
    render: (x, row, idx) => (current - 1) * pageSize + idx + 1
  };
}

// 分页列表
const PageTable = forwardRef(({
  onQueryList, rowkey, columns, showIndex, defaultPageSize, ...props
}, ref) => {
  const { loading, data, run, pagination } = usePagination(async ({ current, pageSize }) => {
    try {
      const res = await onQueryList({
        page: current,
        pageSize
      });
      return res;
    } catch (e) {
      console.error('search table query list error', e);
      message.error(e.message || '请求失败');
    }
  }, {
    manual: true,
    defaultPageSize
  });

  useImperativeHandle(ref, () => ({
    search: () => run({ ...pagination, current: 1 }),
    pagination
  }));

  const cols = showIndex ? [
    getIndexColumn(pagination.current, pagination.pageSize)
  ].concat(columns) : columns;
  useEffect(() => {
    run(pagination);
  }, []);

  return <Table
    rowKey={rowkey || 'id'}
    dataSource={data?.list}
    loading={loading}
    columns={cols}
    size="middle"
    pagination={pagination}
    // bordered
    {...props}
  >
  </Table>;
});

export default PageTable;
