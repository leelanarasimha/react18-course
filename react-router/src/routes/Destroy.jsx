import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

export async function destroyAction({ params }) {
  //throw new Error('oops');
  await deleteContact(params.contactId);
  return redirect('/');
}
