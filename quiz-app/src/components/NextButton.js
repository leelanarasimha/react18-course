export default function NextButton({ newAnswer, dispatch }) {
  if (!newAnswer) return null;
  return (
    <div style={{ marginTop: '10px', textAlign: 'end' }}>
      <button onClick={() => dispatch({ type: 'nextQuestion' })} className="btn start-btn">
        Next
      </button>
    </div>
  );
}
