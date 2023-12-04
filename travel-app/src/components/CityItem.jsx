import PropTypes from 'prop-types';
import styles from './CityItem.module.css';

export default function CityItem({ city }) {
  CityItem.propTypes = {
    city: PropTypes.object.isRequired
  };
  return (
    <div className={styles.city}>
      <div className="d-flex align-items-center">
        <div>{city.emoji_flag}</div>
        <div>{city.name}</div>
      </div>
      <div>
        <button className={styles.deleteButton}>&times;</button>
      </div>
    </div>
  );
}
