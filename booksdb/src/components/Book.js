export default function Book({ book, handleSelectedId }) {
  return (
    <li className="book" onClick={handleSelectedId}>
      <img src={book.image} />
      <div>
        <h3>{book.title}</h3>
        <div>Year: {book.year}</div>
      </div>
    </li>
  );
}
