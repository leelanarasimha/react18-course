export default function Options({ options }) {
  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <button className="btn btn-option">{option}</button>
        </div>
      ))}
    </div>
  );
}
