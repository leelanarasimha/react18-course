import { average } from '../services/FormatBookResponse';

export default function BooksReadSummary({ books }) {
  const rating = average(books.map((book) => +book.rating));
  const userRating = average(books.map((book) => +book.userRating));
  return (
    <div className="books-summary">
      <h3>Books You Read</h3>
      <div className="d-flex justify-content-between">
        <div>
          <span>📘</span>
          <span>{books.length} Books</span>
        </div>
        <div>
          <span>⭐</span>
          <span>{rating || 0}</span>
        </div>
        <div>
          <span>🌟</span>
          <span>{userRating || 0} </span>
        </div>
      </div>
    </div>
  );
}
