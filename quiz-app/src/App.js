import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';

const initialState = {
  questions: [],
  status: 'loading' //loading, ready, error, active, finished
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error' };
  }
}

function App() {
  const [{ status, questions }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(`http://localhost:9001/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className="container">
      <Header />
      <Main>{status === 'loading' && <Loader />}</Main>
    </div>
  );
}

export default App;
