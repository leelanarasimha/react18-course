import './App.css';

import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counterHeading, setCounterHeading] = useState('Counter Heading');

  function handleInc() {
    setCounter(counter + 1);
  }

  function reset() {
    setCounter(0);
    setCounterHeading('Leela');
  }

  console.log('Rendering');

  function undo() {
    setTimeout(reset, 2000);
  }

  function handleTripleInc() {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }
  return (
    <div className="container">
      <h3>{counterHeading}</h3>

      <div>{counter}</div>

      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleTripleInc}>+++</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={undo}>Undo in 2sec</button>
      </div>
    </div>
  );
}

export default App;
