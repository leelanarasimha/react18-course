import { useEffect } from 'react';

export default function Timer({ seconds, dispatch }) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'timer' });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="timer">
      {mins < 10 ? '0' : ''}
      {mins}: {secs < 10 ? '0' : ''}
      {secs}
    </div>
  );
}
