export default function Button({ onClick, children }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
