export default function FinishScreen({ points, maxPoints, dispatch }) {
  return (
    <div>
      <div className="finish">
        You scored {points} out of {maxPoints}
      </div>
      <div style={{ marginTop: '10px', textAlign: 'end' }}>
        <button onClick={() => dispatch({ type: 'restart' })} className="btn start-btn">
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
