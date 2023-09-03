import { useState } from 'react';

export default function AddItem() {
  const [name, setName] = useState('Milk Packet');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  return (
    <div>
      <h3>Add Item</h3>
      <form className="add-item">
        <div>
          <label>Item Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Quantity:</label>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div>
          <button className="btn">Add Item</button>
        </div>
      </form>
    </div>
  );
}
