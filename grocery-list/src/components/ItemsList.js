import { useState } from 'react';
import SingleItem from './SingleItem';

export default function ItemsList({ items }) {
  const totalPrice = items.reduce((acc, item) => {
    return (acc = acc + item.price * item.quantity);
  }, 0);

  if (!items.length) return <h3 style={{ textAlign: 'center' }}>Please add items</h3>;
  return (
    <div>
      <h3>Items List</h3>
      {items.map((item) => (
        <SingleItem item={item} key={item.id} />
      ))}
      <div className="total">Total Price: ${totalPrice}</div>
    </div>
  );
}
