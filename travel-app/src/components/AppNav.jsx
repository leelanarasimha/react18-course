import { Link } from 'react-router-dom';
import styles from './AppNav.module.css';
export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
