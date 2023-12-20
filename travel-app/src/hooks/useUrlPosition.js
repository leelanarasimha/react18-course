import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get('lat');
  const mapLong = searchParams.get('long');

  return { mapLat, mapLong };
}
