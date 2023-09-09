import Button from './Button';

export default function BillShare({ friends }) {
  return (
    <div>
      <h3>Share Bill Details</h3>
      <form>
        <div>
          <label>Select Friend Who paid the bill</label>
          <select>
            <option value="">Select Friend</option>
            {friends.map((friend) => (
              <option value={friend.id}>{friend.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Bill Amount</label>
          <input type="text" />
        </div>

        <div>
          <Button>Add Bill</Button>
        </div>
      </form>
    </div>
  );
}
