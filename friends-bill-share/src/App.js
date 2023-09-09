import './App.css';
import AddFriend from './components/AddFriend';
import BillShare from './components/BillShare';
import FriendsList from './components/FriendsList';
import { useState } from 'react';

function App() {
  const FriendsList = useState([]);
  return (
    <div className="App">
      <AddFriend />
      <BillShare />
      <FriendsList />
    </div>
  );
}

export default App;
