import CounterButtons from './CounterButtons';
import { useCounter } from './CounterContext';

const Counter = () => {
  const { count } = useCounter();
  return (
    <div>
      <div>{count}</div>
      <CounterButtons />
    </div>
  );
};

export default Counter;
