export default function AddItem() {
  return (
    <div>
      <h3>Add Item</h3>
      <form className="add-item">
        <div>
          <label>Item Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Quantity:</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input type="number" />
        </div>

        <div>
          <button className="btn">Add Item</button>
        </div>
      </form>
    </div>
  );
}
