import { Form, NavLink, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { createContact, getContacts } from '../contacts';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  let contacts = await getContacts(q);
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  let { contacts } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      <div id="container">
        <div id="sidebar">
          <div className="search-box">
            <div>
              <Form>
                <input type="search" placeholder="Search" name="q" />
              </Form>
            </div>
            <div>
              <Form method="post">
                <button>New</button>
              </Form>
            </div>
          </div>

          <nav>
            {contacts.length ? (
              <ul className="names-list">
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink
                      to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive ? 'active' : isPending ? 'pending' : ''
                      }
                    >
                      {contact.first} {contact.last}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Contacts</p>
            )}
          </nav>
        </div>
        <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
