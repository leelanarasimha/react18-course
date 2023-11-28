import styles from './main.module.css';

export default function AddTodo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>TODO</h2>

      <div className={styles.LabelContainer}>
        <label className={styles.Label}>What needs to be Done?</label>
      </div>
      <div className={styles.FormContainer}>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
