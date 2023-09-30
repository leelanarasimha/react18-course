import BookRead from './BookRead';

export default function BooksReadList({ booksRead }) {
  return (
    <ul className="books-read-list">
      {booksRead.map((book) => (
        <BookRead book={book} />
      ))}
    </ul>
  );
}
