import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import NumResults from './components/NumResults';
import ListBox from './components/ListBox';
import BooksList from './components/BooksList';
import BooksReadSummary from './components/BooksReadSummary';
import BooksReadList from './components/BooksReadList';
import { FormatBookResponse } from './services/FormatBookResponse';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Search from './components/Search';

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

const KEY = `AIzaSyDd8zjqw7paHROuV-wUP-ZNvUXmGornx0c`;
function App() {
  const [booksData, setBooksData] = useState([]);
  const [booksReadData, setBooksReadData] = useState(BooksRead);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  async function fetchPosts() {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`);
      const data = await response.json();
      console.log(data);
      if (!data.items?.length) throw new Error('No Books Data Available');
      setBooksData(FormatBookResponse(data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (query.length < 4) {
      return;
    }
    fetchPosts();
  }, [query]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults books={booksData} />
      </NavBar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && <BooksList booksData={booksData} />}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          <BooksReadSummary />
          <BooksReadList booksRead={booksReadData} />
        </ListBox>
      </Main>
    </>
  );
}

export default App;
