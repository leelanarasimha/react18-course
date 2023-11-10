import { Form, Link, Outlet, useLoaderData } from 'react-router-dom';
import { createContact, getContacts } from '../contacts';

export async function loader() {
  let contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  let { contacts } = useLoaderData();
  console.log(contacts);
  return (
    <>
      <div id="container">
        <div id="sidebar">
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <div>
              <Form method="post">
                <button>New</button>
              </Form>
            </div>
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
