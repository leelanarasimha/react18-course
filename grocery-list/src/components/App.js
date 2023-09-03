import { useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  function onItemSelected(id) {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, selected: !item.selected } : item;
      });
    });
  }
  return (
    <div>
      <Header />
      <div className="container">
        <AddItem addItem={addItem} />
        <ItemsList items={items} deleteItem={deleteItem} itemSelected={onItemSelected} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
