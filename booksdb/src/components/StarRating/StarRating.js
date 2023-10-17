import { useState } from 'react';
import Star from './Star';

export default function StarRating() {
  const [rating, setRating] = useState();

  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div className="d-flex align-items-center">
      {Array.from({ length: 5 }, (k, i) => (
        <Star key={i} onRate={() => handleRating(i + 1)} />
      ))}
      <div style={{ fontSize: '20px' }}>{rating || ''}</div>
    </div>
  );
}
