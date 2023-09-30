import BooksReadSummary from './BooksReadSummary';
import BooksRead from './BooksRead';

export default function StudiedList({ booksRead }) {
  return (
    <div className="box">
      <BooksReadSummary />
      <BooksRead booksRead={booksRead} />
    </div>
  );
}
