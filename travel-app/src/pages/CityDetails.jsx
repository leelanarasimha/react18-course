import { useParams, useSearchParams } from 'react-router-dom';
import { useCity } from '../contexts/CityContext';
import { useEffect } from 'react';
import Loader from '../components/Loader';
export default function CityDetails() {
  const { cityId } = useParams();

  const { getCity, currentCity, loading } = useCity();

  const [searchParams, setSearchParams] = useSearchParams();

  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');

  useEffect(() => {
    getCity(cityId);
  }, [cityId]);

  if (loading) return <Loader />;

  return (
    <div>
      <div>City Detaidsdlsddsdsd: {cityId}</div>
      <div>Name: {currentCity.name}</div>
      <div>Country: {currentCity.country}</div>
      <div>lat: {latitude}</div>
      <div>long: {longitude}</div>
    </div>
  );
}
