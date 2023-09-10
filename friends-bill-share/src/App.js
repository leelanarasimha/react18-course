import './App.css';
import AddFriend from './components/AddFriend';
import BillDetails from './components/BillDetails';
import BillShare from './components/BillShare';
import FriendsList from './components/FriendsList';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState('');

  function addFriend(name) {
    setFriends((friends) => [...friends, { id: Date.now(), name, billDetails: [] }]);
  }

  function onBillPaid(billDetails) {
    setFriends((friends) => calculateBill(friends, billDetails));
  }

  function onFriendSelected(friend) {
    setSelectedFriend(friend);
  }

  function calculateBill(friends, billDetails) {
    const amountPrice = Math.round(+billDetails.bill / friends.length);
    const friendDetails = [];

    for (let friend of friends) {
      const singleFriend = { ...friend };
      if (singleFriend.id === +billDetails.friendId) {
        friendDetails.push(singleFriend);
        continue;
      }

      const billings = [];
      let found = false;

      if (singleFriend.billDetails.length) {
        for (var billing of singleFriend.billDetails) {
          if (billing.id === billDetails.friendId) {
            found = true;
            billings.push({ ...billing, ...{ price: billing.price + amountPrice } });
          } else {
            billings.push(billing);
          }
        }
      }

      if (!found) {
        billings.push({ id: billDetails.friendId, name: billDetails.name, price: +amountPrice });
      }

      singleFriend['billDetails'] = billings;
      friendDetails.push(singleFriend);
    }

    return friendDetails;
  }

  return (
    <div className="container">
      <AddFriend onAddFriend={addFriend} />
      <BillShare friends={friends} onBillPaid={onBillPaid} />
      <FriendsList friends={friends} selectedFriend={onFriendSelected} />
      {selectedFriend && <BillDetails friend={selectedFriend} />}
    </div>
  );
}

export default App;
