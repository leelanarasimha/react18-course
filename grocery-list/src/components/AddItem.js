import { useState } from 'react';

export default function AddItem({ addItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  function onAddItemSubmit(e) {
    e.preventDefault();
    if (name === '') return;
    const item = { name, quantity, price, id: Date.now(), selected: false };
    console.log(item);
    addItem(item);
    setName('');
    setQuantity(1);
    setPrice(0);
  }

  return (
    <div>
      <h3>Add Item</h3>
      <form className="add-item" onSubmit={onAddItemSubmit}>
        <div>
          <label>Item Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Quantity:</label>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Price per Quantity</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div>
          <button className="btn">Add Item</button>
        </div>
      </form>
    </div>
  );
}
