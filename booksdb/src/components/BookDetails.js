import { useEffect, useState } from 'react';
import { prepareBookObject } from '../services/FormatBookResponse';
import Loader from './Loader';
import StarRating from './StarRating/StarRating';

export default function BookDetails({ selectedId, handleBack, onBookRead, booksReadData }) {
  const [book, setBook] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const isRated = booksReadData.map((book) => book.id).includes(selectedId);
  const ratedBook = booksReadData.find((book) => book.id === selectedId);

  async function getBookDetails() {
    setIsLoading(true);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${selectedId}`);
    const bookDetails = await response.json();

    setBook(prepareBookObject(bookDetails));
    setIsLoading(false);
  }

  function handleReadBook() {
    onBookRead({ ...book, userRating });
    handleBack();
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
        <div className="book-details">
          <div className="d-flex" style={{ gap: '10px' }}>
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
          {isRated ? (
            'You already rated this book'
          ) : (
            <div>
              <div>
                <div>Rate Book: </div>
                <StarRating maxRating={10} color="#fc4199" onSetRating={setUserRating} />
              </div>
              {userRating > 0 && (
                <div>
                  <button onClick={handleReadBook}>Add to List</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
