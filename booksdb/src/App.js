import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';

const Books = [
  {
    isbn: '9788129112859',
    title: 'I BOUGHT THE MONKS FERRARI',
    rating: 4.3,
    year: 2001,
    publisher: 'Rupa Publications India',
    image: 'https://covers.openlibrary.org/b/id/6903838-M.jpg'
  },
  {
    isbn: '9780618263225',
    title: 'The Lord of the Rings',
    rating: 4.3,
    year: 2004,
    publisher: 'HarperCollins Publishers',
    image: 'https://covers.openlibrary.org/b/id/393992-M.jpg'
  },
  {
    isbn: '9780984221233',
    title: 'A Python Book',
    rating: 4.3,
    year: 2006,
    publisher: 'Platypus Global Media"',
    image:
      'http://books.google.com/books/content?id=1FL-ygAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    isbn: '9781521546185',
    title: 'React. Js Book',
    rating: 4.3,
    year: 2008,
    publisher: 'Packt Publishers',
    image:
      'http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  }
];

const BooksRead = [
  {
    isbn: '9788129112859',
    title: 'I BOUGHT THE MONKS FERRARI',
    rating: 4.3,
    year: 2001,
    publisher: 'Rupa Publications India',
    image: 'https://covers.openlibrary.org/b/id/6903838-M.jpg'
  },
  {
    isbn: '9780618263225',
    title: 'The Lord of the Rings',
    rating: 4.3,
    year: 2004,
    publisher: 'HarperCollins Publishers',
    image: 'https://covers.openlibrary.org/b/id/393992-M.jpg'
  },
  {
    isbn: '9780984221233',
    title: 'A Python Book',
    rating: 4.3,
    year: 2006,
    publisher: 'Platypus Global Media"',
    image:
      'http://books.google.com/books/content?id=1FL-ygAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  {
    isbn: '9781521546185',
    title: 'React. Js Book',
    rating: 4.3,
    year: 2008,
    publisher: 'Packt Publishers',
    image:
      'http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  }
];
function App() {
  const [booksData, setBooksData] = useState(Books);
  const [booksReadData, setBooksReadData] = useState(BooksRead);
  return (
    <>
      <NavBar />
      <Main booksData={booksData} booksRead={booksReadData} />
    </>
  );
}

export default App;
