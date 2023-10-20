export default function BookRead({ book, onDeleteBook }) {
  return (
    <li className="d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
      <div className="d-flex" style={{ gap: '10px' }}>
        <img src={book.image} />
        <div>
          <h3>{book.title}</h3>
          <div className="d-flex " style={{ gap: '10px' }}>
            <div>
              <span>⭐</span>
              <span>{book.rating}</span>
            </div>
            <div>
              <span>🌟</span>
              <span>{book.userRating}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#" onClick={onDeleteBook}>
          X
        </a>
      </div>
    </li>
  );
}
