import CounterButtons from './CounterButtons';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <div>{count}</div>
      <CounterButtons increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
};

export default Counter;
