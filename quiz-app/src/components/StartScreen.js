export default function StartScreen({ questionsCount, dispatch }) {
  return (
    <div className="welcome-page">
      <h2>Welcome To the Quiz</h2>
      <h3>Total Questions: {questionsCount}</h3>
      <div>
        <button className="btn start-btn" onClick={() => dispatch({ type: 'start' })}>
          Let's Start
        </button>
      </div>
    </div>
  );
}
