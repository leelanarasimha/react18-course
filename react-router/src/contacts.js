import { matchSorter } from 'match-sorter';
export async function getContacts(search) {
  await fakeNetwork();
  let contacts = localStorage.getItem('contacts');
  if (!contacts) contacts = [];
  else {
    contacts = JSON.parse(contacts);
    if (search) {
      contacts = matchSorter(contacts, search, { keys: ['first', 'last'] });
    }
  }
  return contacts;
}

export async function fakeNetwork() {
  return new Promise((res) => setTimeout(res, 500));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now(), first: 'leela', last: 'web dev' };
  let contacts = await getContacts();
  contacts.unshift(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  return contact;
}

export async function getContact(contactId) {
  await fakeNetwork();
  let contacts = await getContacts();
  let contact = contacts.find((contact) => contact.id === contactId);
  return contact;
}

export async function updateContact(contactId, updates) {
  await fakeNetwork();
  let contacts = await getContacts();
  let contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) throw new Error('No contact found for the id');
  Object.assign(contact, updates);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  return contact;
}

export async function deleteContact(id) {
  let contacts = await getContacts();

  let index = contacts.findIndex((contact) => contact.id === id);
  if (index >= -1) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
