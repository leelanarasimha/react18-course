export default function Book({ book }) {
  return (
    <li className="book">
      <img src={book.image} />
      <div>
        <h3>{book.title}</h3>
        <div>Year: {book.year}</div>
      </div>
    </li>
  );
}
