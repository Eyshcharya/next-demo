import { ContactsArray } from '@/app/types/contacts.types';
import Content from './content';

const Contacts = async () => {
  // Fetching contacts from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const contacts: ContactsArray = await res.json();

  return (
    <div className='flex font-inter mb-8 gap-x-16'>
      <Content contacts={contacts} />
    </div>
  );
};

export default Contacts;
