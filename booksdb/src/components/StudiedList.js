import BooksReadSummary from './BooksReadSummary';
import BooksReadList from './BooksReadList';
import { useState } from 'react';

export default function StudiedList({ booksRead }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <div style={{ textAlign: 'end', backgroundColor: '#eee' }}>
        <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <>
          <BooksReadSummary />
          <BooksReadList booksRead={booksRead} />
        </>
      )}
    </div>
  );
}
