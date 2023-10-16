import { useEffect, useState } from 'react';
import { prepareBookObject } from '../services/FormatBookResponse';
import Loader from './Loader';

export default function BookDetails({ selectedId, handleBack }) {
  const [book, setBook] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getBookDetails() {
    setIsLoading(true);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${selectedId}`);
    const bookDetails = await response.json();

    setBook(prepareBookObject(bookDetails));
    setIsLoading(false);
  }

  useEffect(
    function () {
      getBookDetails();
    },
    [selectedId]
  );

  return (
    <div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="book-details d-flex">
          <div>
            <img src={book.image} />
          </div>

          <div>
            <h2>{book.title}</h2>
            <h3>{book.subTitle}</h3>

            <ul>
              <li>Year: {book.year}</li>
              <li>Publisher: {book.publisher}</li>
              <li>ISBN: {book.isbn}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
