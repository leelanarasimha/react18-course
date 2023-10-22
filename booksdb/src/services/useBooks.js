import { useEffect, useState } from 'react';
import { FormatBookResponse } from './FormatBookResponse';

export function useBooks(query, callBack) {
  const controller = new AbortController();
  const [booksData, setBooksData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchPosts() {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
        signal: controller.signal
      });
      const data = await response.json();
      console.log(data);
      if (!data.items?.length) throw new Error('No Books Data Available');
      setBooksData(FormatBookResponse(data));
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (query.length < 4) {
      return;
    }
    fetchPosts();
    callBack?.();
    return () => {
      controller.abort();
    };
  }, [query]);

  return { isLoading, error, booksData };
}
