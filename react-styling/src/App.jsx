import AddTodo from './AddTodo';

function App() {
  return (
    <div
      style={{
        minHeight: '200px',
        margin: '30px auto',
        boxSizing: 'border-box',
        backgroundColor: 'lightcoral',
        padding: '10px'
      }}
    >
      <AddTodo />
    </div>
  );
}

export default App;
