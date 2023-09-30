import Book from './Book';

export default function BooksList({ booksData }) {
  return (
    <ul className="books-list">
      {booksData.map((book) => (
        <Book book={book} key={book.isbn} />
      ))}
    </ul>
  );
}
