import { useNavigate, useSearchParams } from 'react-router-dom';

export default function MapContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');

  function showForm() {
    navigate('/app/addcity');
  }

  return (
    <div onClick={showForm} style={{ height: '100%' }}>
      lat: {latitude}
      long: {longitude}
      <button onClick={() => setSearchParams({ lat: 1, long: 2 })}>Change</button>
    </div>
  );
}
