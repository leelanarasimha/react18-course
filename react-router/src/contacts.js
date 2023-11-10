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
