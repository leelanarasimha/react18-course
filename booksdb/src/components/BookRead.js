export default function BookRead({ book }) {
  return (
    <li className="d-flex">
      <img src={book.image} />
      <div>
        <h3>{book.title}</h3>
        <div className="d-flex " style={{ gap: '10px' }}>
          <div>
            <span>⭐</span>
            <span>4.3</span>
          </div>
          <div>
            <span>🌟</span>
            <span>4.3</span>
          </div>
        </div>
      </div>
    </li>
  );
}
