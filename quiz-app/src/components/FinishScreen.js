export default function FinishScreen({ points, maxPoints }) {
  return (
    <div className="finish">
      You scored {points} out of {maxPoints}
    </div>
  );
}
