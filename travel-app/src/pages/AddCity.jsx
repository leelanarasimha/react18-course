import { useNavigate } from 'react-router-dom';
import styles from './AddCity.module.css';
export default function AddCity() {
  const navigate = useNavigate();

  function onBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div className={styles.addCityContainer}>
      <form>
        <div>
          <label>City</label>
          <div>
            <input type="text" />
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
