import PropTypes from 'prop-types';
import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { useCity } from '../contexts/CityContext';

export default function CityItem({ city }) {
  const { deleteCity } = useCity();
  CityItem.propTypes = {
    city: PropTypes.object.isRequired
  };

  function handleDelete(e) {
    e.preventDefault();
    console.log('test');
    deleteCity(city.id);
  }

  const { currentCity } = useCity();
  return (
    <Link
      to={`/app/cities/${city.id}?lat=${city.latitude}&long=${city.longitude}`}
      className={styles.cityLink}
    >
      <div className={`${styles.city} ${currentCity.id === city.id ? styles.activeCity : ''}`}>
        <div className="d-flex align-items-center">
          <div>{city.emoji_flag}</div>
          <div>{city.name}</div>
        </div>
        <div>
          <button className={styles.deleteButton} onClick={handleDelete}>
            &times;
          </button>
        </div>
      </div>
    </Link>
  );
}
