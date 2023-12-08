import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}

export default App;
