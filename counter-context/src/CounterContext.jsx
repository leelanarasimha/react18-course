import { createContext, useContext, useState } from 'react';

const counterContext = createContext(null);

export const CounterProvider = ({ children }) => {
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

  const values = {
    count,
    increment,
    decrement,
    reset
  };
  return <counterContext.Provider value={values}>{children}</counterContext.Provider>;
};

export const useCounter = () => {
  const context = useContext(counterContext);
  return context;
};
