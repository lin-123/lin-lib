/* eslint-disable */
import { Form, Row, Input, Button, Col } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './SearchForm.module.less';
import classNames from 'classnames';

function SearchForm({
  className,
  initialValues, formItems, actions, noReset, onSearch,
  tableRef
}, ref) {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => form);

  const [collapse, setCollapse] = useState(false);
  const canCollapse = formItems.length > 6;
  const renderFormItem = (list) => list.map(({ render, ...props }, idx) => (
    <Col key={`${props.name}-${idx}`} xs={12} sm={12} lg={{ span: 8 }} xl={{ span: 6 }}>
      <Form.Item {...props}>
        {render ? render(form) : <Input />}
      </Form.Item>
    </Col>
  ));
  return <Form
    form={form}
    initialValues={initialValues}
    layout="inline"
    colon={false}
    className={classNames(styles.form, className)}
  >
    <Row gutter={[16, 16]} className={styles.row}>
      {renderFormItem(formItems.slice(0, 6))}
      {canCollapse && !collapse && renderFormItem(formItems.slice(6))}
      <Col
        style={{
          // marginLeft: 'auto',
          display: 'flex',
          gap: 8
        }}
      >
        {actions}
        {formItems.length > 0 && (<>
          {!noReset && <Button onClick={() => form.resetFields()}>重置</Button>}
          <Button type="primary" onClick={() => {
            if(onSearch){
              onSearch && onSearch(form.getFieldsValue());
            }else{
              tableRef.current && tableRef.current.search && tableRef.current.search(form.getFieldsValue());
            }
          }}>查询</Button>
          {canCollapse && <Button type="link" onClick={() => setCollapse(!collapse)}>
            {collapse ? '展开' : '折叠'}
          </Button>}
        </>)}
      </Col>
    </Row>
  </Form>;
}

export default forwardRef(SearchForm);
