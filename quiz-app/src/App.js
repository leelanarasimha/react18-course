import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Timer from './components/Timer';

const initialState = {
  questions: [],
  status: 'loading', //loading, ready, error, active, finished
  index: 0,
  newAnswer: null,
  points: 0,
  secondsRemaining: 10
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active', secondsRemaining: state.questions.length * 30 };
    case 'newAnswer':
      return { ...state, newAnswer: action.payload };
    case 'nextQuestion':
      const question = state.questions[state.index];
      let points = state.points;
      if (question.correctAnswer === state.newAnswer) {
        points = points + question.points;
      }
      return { ...state, index: state.index + 1, newAnswer: null, points };
    case 'finish':
      return { ...state, status: 'finished' };
    case 'restart':
      return { ...initialState, questions: state.questions, status: 'ready' };
    case 'timer':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status
      };
  }
}

function App() {
  const [{ status, questions, index, newAnswer, points, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const questionsCount = questions.length;

  const maxPoints = questions.reduce((acc, curr) => acc + curr.points, 0);
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
          <>
            <Progress questionsCount={questionsCount} index={index} points={points} maxPoints={maxPoints} />
            <Question question={questions[index]} dispatch={dispatch} newAnswer={newAnswer} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Timer seconds={secondsRemaining} dispatch={dispatch} />
              <NextButton
                newAnswer={newAnswer}
                dispatch={dispatch}
                index={index}
                questionsCount={questionsCount}
              />
            </div>
          </>
        )}
        {status === 'finished' && <FinishScreen points={points} maxPoints={maxPoints} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default App;
