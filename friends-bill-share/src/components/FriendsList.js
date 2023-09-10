export default function FriendsList({ friends, selectedFriend }) {
  function onFriendSelected(friend) {
    selectedFriend(friend);
  }

  return (
    <div>
      <h3>Friends Details</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => onFriendSelected(friend)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
