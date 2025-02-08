# hooks

## useScale
根据给定的屏幕宽高计算当前元素的scale值，保持原有比例；
```jsx
import { useRef } from 'react';
import useScale from './useScale';

export default function ScaleDemo() {
  const elRef = useRef();

  useScale({
    width: 1920, height: 1080, getTarget: () => elRef.current
  });
  return <div style={{ width: 100, height: 100, background: 'black' }}>
    <div
      ref={elRef}
      style={{ width: 100, height: 100, background: 'red' }}
    ></div>
  </div>
}
```

## useUUID
随机一个 uuid

```jsx
import useUUID from './useUUID.js';

export default function UUIDDemo() {
  const uuid = useUUID('uuid');
  return <div id={uuid}>
    {uuid}
  </div>
}
```