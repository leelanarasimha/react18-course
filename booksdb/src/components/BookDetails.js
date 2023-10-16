import { useEffect } from 'react';
import { prepareBookObject } from '../services/FormatBookResponse';

export default function BookDetails({ selectedId, handleBack }) {
  async function getBookDetails() {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${selectedId}`);
    const bookDetails = await response.json();

    console.log(prepareBookObject(bookDetails));
  }

  useEffect(function () {
    getBookDetails();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
      {selectedId}
    </div>
  );
}
