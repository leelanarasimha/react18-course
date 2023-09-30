import BooksReadSummary from './BooksReadSummary';
import BooksReadList from './BooksReadList';

export default function StudiedList({ booksRead }) {
  return (
    <div className="box">
      <BooksReadSummary />
      <BooksReadList booksRead={booksRead} />
    </div>
  );
}
