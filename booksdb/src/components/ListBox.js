import BooksList from './BooksList';

export default function ListBox({ booksData }) {
  return (
    <div className="box">
      <BooksList booksData={booksData} />
    </div>
  );
}
