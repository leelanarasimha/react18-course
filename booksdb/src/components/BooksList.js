import Book from './Book';

export default function BooksList({ booksData, handleSelectedId }) {
  return (
    <ul className="books-list">
      {booksData.map((book) => (
        <Book book={book} key={book.isbn} handleSelectedId={() => handleSelectedId(book.id)} />
      ))}
    </ul>
  );
}
