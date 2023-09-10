import { useState } from 'react';
import Button from './Button';

export default function BillShare({ friends, onBillPaid }) {
  const [bill, setBill] = useState('');
  const [friend, setFriend] = useState('');

  function submitBill(event) {
    event.preventDefault();
    const singleFriend = friends.find((fr) => +friend === +fr.id);
    const billDetails = { friendId: friend, name: singleFriend.name, bill };
    onBillPaid(billDetails);
  }
  return (
    <div>
      <h3>Share Bill Details</h3>
      <form onSubmit={submitBill}>
        <div>
          <label>Select Friend Who paid the bill</label>
          <select value={friend} onChange={(e) => setFriend(e.target.value)}>
            <option value="">Select Friend</option>
            {friends.map((friend) => (
              <option value={friend.id} key={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Bill Amount</label>
          <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />
        </div>

        <div>
          <Button>Add Bill</Button>
        </div>
      </form>
    </div>
  );
}
