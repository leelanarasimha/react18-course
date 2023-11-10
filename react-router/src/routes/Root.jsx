import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getContacts } from '../contacts';

export async function loader() {
  let contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  let { contacts } = useLoaderData();
  console.log(contacts);
  return (
    <>
      <div id="container">
        <div id="sidebar">
          <div>
            <input type="text" placeholder="Search" />
          </div>

          <div>
            {contacts.length ? (
              <ul className="names-list">
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first} {contact.last}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Contacts</p>
            )}
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
