export default function FriendsList({ friends }) {
  return (
    <div>
      <h3>Friends Details</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}
