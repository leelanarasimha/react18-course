import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import CityItem from '../components/CityItem';
import Message from '../components/Message';

export default function CitiesList({ cities, loading }) {
  CitiesList.propTypes = {
    cities: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  if (loading) return <Loader />;

  if (!cities.length) return <Message message="Cities Data is not avialable" />;

  return (
    <div>
      {cities.map((city) => (
        <CityItem city={city} key={city.name} />
      ))}
    </div>
  );
}
