import './App.css';
import AddFriend from './components/AddFriend';
import BillShare from './components/BillShare';
import FriendsList from './components/FriendsList';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState([]);

  function addFriend(name) {
    setFriends((friends) => [...friends, { id: Date.now(), name, billDetails: [] }]);
  }
  return (
    <div className="container">
      <AddFriend onAddFriend={addFriend} />
      <BillShare friends={friends} />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
