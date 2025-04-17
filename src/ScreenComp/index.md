# 大屏组件

## 动态数字 DynamicNum
```jsx
import DynamicNum from './DynamicNum';

export default () => {
  return <DynamicNum num={100} />
}
```

## 水印
```jsx
import Watermark from './Watermark';

export default () => {
  return <Watermark
    text={`第一行\n第二行222\n第三行33333`}
    size={400}
    fontSize={18}
    color="#e0dcdc92"
  />
}
```
