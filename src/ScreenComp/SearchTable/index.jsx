// 通用查询
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import styles from './index.module.less';
import PageTable from './PageTable';
import SearchForm from './SearchForm';

export const getIndexColumn = (current, pageSize) => {
  return {
    title: '序号',
    dataIndex: 'index',
    width: 80,
    render: (x, row, idx) => (current - 1) * pageSize + idx + 1
  };
}

function SearchTable({
  initialValues, formItems = [], columns, actions,
  showIndex = true, onQueryList, rowKey = 'id', tableProps
}, ref) {
  const formRef = useRef();
  const tableRef = useRef();

  useImperativeHandle(ref, () => ({
    form: formRef.current,
    search: tableRef.current.search
  }));

  return <div className={classNames('page-content', styles.searchtable)}>
    <SearchForm
      className={styles.search}
      initialValues={initialValues}
      ref={formRef}
      formItems={formItems}
      actions={actions}
      // onSearch 传入会由于ref滞后性，函数不存在
      // onSearch={tableRef.current?.search}
      tableRef={tableRef}
    />
    <PageTable
      ref={tableRef}
      {...{ showIndex, columns, rowKey, ...tableProps }}
      onQueryList={async ({ page, pageSize }) => {
        const params = formRef.current.getFieldsValue();
        return onQueryList({ page, pageSize, ...params })
      }}
    />
  </div>
}

export default forwardRef(SearchTable);
