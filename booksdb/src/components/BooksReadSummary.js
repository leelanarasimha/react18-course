export default function BooksReadSummary({ books }) {
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
          <span>4.5</span>
        </div>
        <div>
          <span>🌟</span>
          <span>4.5</span>
        </div>
      </div>
    </div>
  );
}
