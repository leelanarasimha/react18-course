import PropTypes from 'prop-types';
import styles from './CountryItem.module.css';
export default function CountryItem({ country }) {
  CountryItem.propTypes = {
    country: PropTypes.object.isRequired
  };

  return (
    <div className={styles.countryItem}>
      <div>{country.country}</div>
      <div>{country.emoji_flag}</div>
    </div>
  );
}
