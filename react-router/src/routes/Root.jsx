import { Form, NavLink, Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';
import { createContact, getContacts } from '../contacts';
import { useEffect, useState } from 'react';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  let contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  let { contacts, q } = useLoaderData();
  const [query, setQuery] = useState(q);
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    //document.getElementById('search').value = q;
    setQuery(q);
  }, [q]);

  function onSearch(event) {
    setQuery(event.target.value);
    submit(event.currentTarget.form);
  }

  return (
    <>
      <div id="container">
        <div id="sidebar">
          <div className="search-box">
            <div>
              <Form>
                <input
                  type="search"
                  id="search"
                  placeholder="Search"
                  name="q"
                  value={query}
                  onChange={onSearch}
                />
                <div id="search-spinner" hidden={!searching}></div>
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
