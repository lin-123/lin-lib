import { Button } from 'antd';
import { useState } from 'react';

export const textBtnProps = {
  color: 'default',
  variant: 'link'
}
// 操作按钮，加 loading 效果
export default function ActionButton({ onClick, text, children, ...props }) {
  const [loading, setLoading] = useState(false);
  if (text) {
    Object.assign(props, textBtnProps);
  }
  return <Button
    onClick={async () => {
      setLoading(true);
      onClick && await onClick();
      setLoading(false)
    }}
    loading={loading}
    {...props}
  >
    {children}
  </Button>;
}
