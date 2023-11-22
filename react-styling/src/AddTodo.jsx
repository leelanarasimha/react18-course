export default function AddTodo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ padding: '10px 20px', textAlign: 'center', color: 'white' }}>TODO</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <label style={{ padding: '10px 20px', textAlign: 'center' }}>What needs to be Done?</label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
