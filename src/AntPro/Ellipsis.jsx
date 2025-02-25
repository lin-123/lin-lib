import { Typography } from 'antd';

export default function Ellipsis({ width, children }) {
  return <Typography.Text
    style={{ width }}
    ellipsis={{ tooltip: children }}
  >
    {children}
  </Typography.Text>
}