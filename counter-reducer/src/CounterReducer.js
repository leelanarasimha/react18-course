import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
  }
}
export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  function setStep(e) {
    dispatch({ type: 'setStep', payload: +e.target.value });
  }

  return (
    <div>
      <div>Step</div>
      <div>
        <select value={state.step} onChange={setStep}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div>Counter</div>
      <div>
        <input value={state.count} onChange={updateCount} />
      </div>
      <div>
        <button onClick={inc}>+</button>&nbsp;
        <button onClick={dec}>-</button>&nbsp;
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
