export default function NextButton({ newAnswer, dispatch, index, questionsCount }) {
  if (!newAnswer) return null;

  if (index + 1 < questionsCount)
    return (
      <div style={{ marginTop: '10px', textAlign: 'end' }}>
        <button onClick={() => dispatch({ type: 'nextQuestion' })} className="btn start-btn">
          Next
        </button>
      </div>
    );

  if (index + 1 === questionsCount) {
    return (
      <div style={{ marginTop: '10px', textAlign: 'end' }}>
        <button onClick={() => dispatch({ type: 'finish' })} className="btn start-btn">
          Finish
        </button>
      </div>
    );
  }
}
