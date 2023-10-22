import { useEffect, useRef } from 'react';
import { useKeyDownEvent } from '../services/useKeyDownEvent';

export default function Search({ query, setQuery }) {
  const inputRef = useRef(null);

  useKeyDownEvent('enter', function () {
    const activeElement = document.activeElement;
    inputRef.current.focus();
    if (activeElement !== inputRef.current) {
      setQuery('');
    }
  });

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
