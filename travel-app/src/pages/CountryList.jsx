import PropTypes from 'prop-types';
import CountryItem from '../components/CountryItem';
import Loader from '../components/Loader';
import styles from './CountryList.module.css';
import { useCity } from '../contexts/CityContext';
export default function CountryList() {
  const { cities, loading } = useCity();

  if (loading) return <Loader />;

  let countries = [];

  countries = cities.reduce((arr, curr) => {
    if (!arr.map((el) => el.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji_flag: curr.emoji_flag }];
    } else {
      return arr;
    }
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}
