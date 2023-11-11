import { Form, useLoaderData } from 'react-router-dom';

export default function EditContact() {
  const { contact } = useLoaderData();
  return (
    <div>
      <h1>Edit Contact</h1>
      <Form method="post">
        <div>
          <label>
            <div>First</div>
            <input type="text" placeholder="first" name="first" defaultValue={contact.first} />
          </label>
        </div>
        <div>
          <label>
            <div>Last</div>
            <input type="text" placeholder="last" name="last" defaultValue={contact.last} />
          </label>
        </div>
        <div>
          <label>
            <div>Twitter</div>
            <input type="text" placeholder="@jack" name="twitter" defaultValue={contact.twitter} />
          </label>
        </div>
        <div>
          <label>
            <div>Avatar URL</div>
            <input
              type="text"
              placeholder="http://example.com/avatar.jpg"
              name="avatar"
              defaultValue={contact.avatar}
            />
          </label>
        </div>
        <div>
          <label>
            <div>Notes</div>
            <textarea name="notes" defaultValue={contact.notes}></textarea>
          </label>
        </div>

        <p>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </p>
      </Form>
    </div>
  );
}
