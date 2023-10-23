export default function Options({ question, dispatch, newAnswer }) {
  const hasAnswered = newAnswer !== null;
  const correctAnswer = question.correctAnswer;
  return (
    <div>
      {question.options.map((option) => (
        <div key={option}>
          <button
            onClick={() => dispatch({ type: 'newAnswer', payload: option })}
            className={`btn btn-option ${
              hasAnswered ? (correctAnswer === option ? 'correct' : newAnswer === option ? 'wrong' : '') : ''
            }`}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}
