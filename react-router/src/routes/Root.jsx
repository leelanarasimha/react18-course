export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div>
          <input type="text" placeholder="Search" />
        </div>

        <div>
          <ul className="names-list">
            <li>
              <a href="#">Your Name</a>
            </li>
            <li>
              <a href="#">Your Friend</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}
