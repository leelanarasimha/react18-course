import { useLoaderData } from 'react-router-dom';
import { getContact } from '../contacts';

export async function loader({ params }) {
  let contact = await getContact(params.contactId);
  console.log(contact);
  return { contact };
}

export default function Contact() {
  const contactDetails = useLoaderData();

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
        <h1>
          {contact.first} {contact.last}
        </h1>
        <p>
          Twitter Handle: <a href={`https://www.twitter.com/${contact.twitter}`}>{contact.twitter}</a>
        </p>
        <p>{contact.notes}</p>

        <div>
          <button>Edit</button>&nbsp;
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
