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
import BookDetails from './components/BookDetails';

const KEY = `AIzaSyDd8zjqw7paHROuV-wUP-ZNvUXmGornx0c`;
function App() {
  const [booksData, setBooksData] = useState([]);
  const [booksReadData, setBooksReadData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState('');

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? '' : id));
  }

  function handleBookRead(book) {
    setBooksReadData((b) => [...b, book]);
  }

  function handleBack() {
    setSelectedId('');
  }

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
          {!isLoading && !error && <BooksList booksData={booksData} handleSelectedId={handleSelectedId} />}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <BookDetails selectedId={selectedId} handleBack={handleBack} onBookRead={handleBookRead} />
          ) : (
            <>
              <BooksReadSummary books={booksReadData} />
              <BooksReadList booksRead={booksReadData} />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}

export default App;
