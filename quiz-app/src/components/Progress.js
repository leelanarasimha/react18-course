export default function Progress({ questionsCount, index, points, maxPoints }) {
  return (
    <div>
      <progress max={questionsCount} value={index} style={{ width: '100%' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>
          Questions: {index + 1}/{questionsCount}
        </strong>
        <strong>
          Points: {points}/{maxPoints}
        </strong>
      </div>
    </div>
  );
}
