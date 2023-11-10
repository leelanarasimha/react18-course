export async function getContacts() {
  await fakeNetwork();
  let contacts = localStorage.getItem('contacts');
  if (!contacts) contacts = [];
  else contacts = JSON.parse(contacts);
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
