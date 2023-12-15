import { useState } from 'react';

export function useGeolocation() {
  const [error, setError] = useState('');
  const [position, setPosition] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function getPosition() {
    if (!navigator.geolocation) {
      return setError('Gelolocation is not supported by the browser');
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLoading(false);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition({ lat: latitude, long: longitude });
      },
      (error) => {
        setIsLoading(false);
        setError(error.message);
      }
    );
  }

  return { position, getPosition, error, isLoading };
}
