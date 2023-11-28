import { styles } from './styles';
export default function AddTodo() {
  return (
    <div style={styles.Container}>
      <h2 style={styles.Header}>TODO</h2>

      <div style={styles.LabelContainer}>
        <label style={styles.Label}>What needs to be Done?</label>
      </div>
      <div style={styles.FormContainer}>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
