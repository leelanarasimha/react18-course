import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function updateCount(e) {
    setCount(+e.target.value);
  }

  function inc() {
    setCount((c) => c + 1);
  }

  function dec() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div>Counter</div>
      <div>
        <input value={count} onChange={updateCount} />
      </div>

      <div>
        <button onClick={inc}>+</button>&nbsp;
        <button onClick={dec}>-</button>&nbsp;
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
