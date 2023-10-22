import { useEffect, useState } from 'react';

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
