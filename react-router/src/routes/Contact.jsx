import { Form, useLoaderData } from 'react-router-dom';
import { getContact } from '../contacts';

export async function loader({ params }) {
  let contact = await getContact(params.contactId);
  console.log(contact);
  return { contact };
}

export async function favoriteAction({ request }) {
  console.log(request);
  return 'hi';
}

export default function Contact() {
  const contactDetails = useLoaderData();

  function deleteContact(event) {
    if (!confirm('r u sure you want to delete?')) {
      event.preventDefault();
    }
  }

  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
    ...contactDetails.contact
  };

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar} />
      </div>
      <div>
        <Favorite contact={contact} />
      </div>
      <div>
        <h1>
          {contact.first} {contact.last}
        </h1>
        <p>
          Twitter Handle: <a href={`https://www.twitter.com/${contact.twitter}`}>{contact.twitter}</a>
        </p>
        <p>{contact.notes}</p>

        <div>
          <Form action="edit">
            <button>Edit</button>&nbsp;
          </Form>
          <Form action="destroy" method="post" onSubmit={deleteContact}>
            <button>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button name="favorite" value={favorite ? 'false' : 'true'}>
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
