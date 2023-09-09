import { useState } from 'react';

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState('');

  function addFriend(event) {
    event.preventDefault();
    onAddFriend(name);
  }
  return (
    <div>
      <form onSubmit={addFriend}>
        <h3>Add Friend</h3>
        <div>
          <label>FriendName</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <button className="btn">Add Friend</button>
        </div>
      </form>
    </div>
  );
}
