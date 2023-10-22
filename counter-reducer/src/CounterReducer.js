import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    case 'reset':
      return 0;
    case 'setCount':
      return action.payload;
  }
}
export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  function inc() {
    dispatch({ type: 'inc' });
  }

  function dec() {
    dispatch({ type: 'dec' });
  }

  function reset() {
    dispatch({ type: 'reset' });
  }

  function updateCount(e) {
    dispatch({ type: 'setCount', payload: +e.target.value });
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
