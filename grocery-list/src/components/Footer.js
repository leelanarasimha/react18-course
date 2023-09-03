export default function Footer({ items }) {
  if (!items.length) {
    return <div className="footer">No Items. Please Add Items</div>;
  }

  const selectedItemsCount = items.filter((item) => item.selected).length;
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const selectedPrice = items.reduce((acc, item) => {
    if (item.selected) return acc + item.quantity * item.price;
    return acc;
  }, 0);
  return (
    <div className="footer">
      <div>
        Total Items Added is {items.length} and Price is ${totalPrice}
      </div>
      <div>
        Items Selected is {selectedItemsCount} and Price is ${selectedPrice}
      </div>
    </div>
  );
}
