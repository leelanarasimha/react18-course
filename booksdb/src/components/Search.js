import { useEffect, useRef } from 'react';

export default function Search({ query, setQuery }) {
  const inputRef = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (e.code === 'Enter') {
        const activeElement = document.activeElement;
        inputRef.current.focus();
        if (activeElement !== inputRef.current) {
          setQuery('');
        }
      }
    }
    document.addEventListener('keydown', callback);
    inputRef.current.focus();
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search Books..."
      value={query}
      ref={inputRef}
      onInput={(e) => setQuery(e.target.value)}
    />
  );
}
