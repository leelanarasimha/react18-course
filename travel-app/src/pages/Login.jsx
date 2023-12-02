import styles from './Login.module.css';
import PageNav from '../components/PageNav';
export default function Login() {
  return (
    <>
      <PageNav />
      <div className={styles.login}>
        <h1>Login</h1>
        <form>
          <div className={styles.marginTop}>
            <label>Email</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className={styles.marginTop}>
            <label>Password</label>
            <div>
              <input type="password" />
            </div>
          </div>
          <div className={styles.marginTop}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
