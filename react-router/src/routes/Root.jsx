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
              <a href={'contacts/1'}>Your Name</a>
            </li>
            <li>
              <a href={'contacts/2'}>Your Friend</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}
