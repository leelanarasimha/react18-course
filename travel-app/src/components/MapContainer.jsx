import { useSearchParams } from 'react-router-dom';

export default function MapContainer() {
  const [searchParams, setSearchParams] = useSearchParams();

  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');

  return (
    <div>
      lat: {latitude}
      long: {longitude}
      <button onClick={() => setSearchParams({ lat: 1, long: 2 })}>Change</button>
    </div>
  );
}
