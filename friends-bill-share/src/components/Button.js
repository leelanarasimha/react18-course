export default function Button({ onClick, children }) {
  return (
    <button className="btn" onCLick={onClick}>
      {children}
    </button>
  );
}
