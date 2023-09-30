import { useState } from 'react';
import BooksList from './BooksList';

export default function ListBox({ booksData }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <div style={{ textAlign: 'end' }}>
        <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <BooksList booksData={booksData} />}
    </div>
  );
}
