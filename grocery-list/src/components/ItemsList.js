import SingleItem from './SingleItem';

export default function ItemsList({ items }) {
  return (
    <div>
      <h3>Items List</h3>
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
}
