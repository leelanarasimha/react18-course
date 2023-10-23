import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';

const initialState = {
  questions: [],
  status: 'loading', //loading, ready, error, active, finished
  index: 0,
  newAnswer: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer':
      return { ...state, newAnswer: action.payload };
  }
}

function App() {
  const [{ status, questions, index, newAnswer }, dispatch] = useReducer(reducer, initialState);

  const questionsCount = questions.length;
  useEffect(() => {
    fetch(`http://localhost:9001/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className="container">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen questionsCount={questionsCount} dispatch={dispatch} />}
        {status === 'active' && (
          <Question question={questions[index]} dispatch={dispatch} newAnswer={newAnswer} />
        )}
      </Main>
    </div>
  );
}

export default App;
