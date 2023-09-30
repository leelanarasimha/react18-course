import ListBox from './ListBox';

export default function Main({ booksData }) {
  return (
    <div className="main">
      <ListBox booksData={booksData} />
    </div>
  );
}
