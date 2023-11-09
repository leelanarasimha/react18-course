export default function Contact() {
  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true
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
