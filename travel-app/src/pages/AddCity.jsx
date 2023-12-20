import { useNavigate } from 'react-router-dom';
import styles from './AddCity.module.css';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';
export default function AddCity() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [error, setError] = useState('');
  const [geoLoading, setGeoLoading] = useState(false);

  const { mapLat, mapLong } = useUrlPosition();

  console.log(mapLat);
  console.log(mapLong);

  useEffect(() => {
    fetchCityName();
  }, [mapLat, mapLong]);

  async function fetchCityName() {
    try {
      setGeoLoading(true);
      setError('');
      let response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${mapLat}&longitude=${mapLong}`
      );

      let data = await response.json();
      if (!data.countryName) throw new Error('Unable to detect city. Please click in another place');
      console.log(data);
      setCityName(data.city || data.locality || '');
      setCountryName(data.countryName);
    } catch (e) {
      setError(e.message);
    } finally {
      setGeoLoading(false);
    }
  }

  function onBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  if (geoLoading) return <Loader />;
  if (error) return <Message message={error} />;
  return (
    <div className={styles.addCityContainer}>
      <form>
        <div>
          <label>City</label>
          <div>
            <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea></textarea>
          </div>
        </div>

        <div className={`d-flex ${styles.buttons}`}>
          <button>Add City</button>
          <button onClick={onBack}>Back</button>
        </div>
      </form>
    </div>
  );
}
