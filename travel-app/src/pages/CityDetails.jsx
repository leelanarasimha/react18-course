import { useParams, useSearchParams } from 'react-router-dom';
export default function CityDetails() {
  const { cityId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');

  return (
    <div>
      City Detailsdsd: {cityId}
      <div>lat: {latitude}</div>
      <div>long: {longitude}</div>
    </div>
  );
}
