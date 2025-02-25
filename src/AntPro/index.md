# AntPro

## SearchTable
<code src='./SearchTable/demo.jsx'></code>

## Dict 字典
DictSelect DictSpan

<code id='dict' src='./Dict/demo.jsx'></code>

## ActionButton
```jsx
import ActionButton from './ActionButton.jsx'

export default () => {
  const onClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000)
    });
  }

  return <ActionButton onClick={onClick}>
    操作按钮
  </ActionButton>;
}
```

## Ellipsis
```jsx
import Ellipsis from './Ellipsis.jsx';

export default () => {
  return <Ellipsis width={100}>
    EllipsisEllipsisEllipsisEllipsisEllipsisEllipsisEllipsis
  </Ellipsis>
}
```

## NumberSelect
```jsx
import NumberSelect from './NumberSelect.jsx';
import { useState } from 'react';

export default () => {
  const [value, onChange] = useState(2);

  return <NumberSelect min={2} max={9} unit="次" {...{ value, onChange }} />
}
```
