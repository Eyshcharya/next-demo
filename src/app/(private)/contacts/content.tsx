'use client';

import { Contact, ContactsArray } from '@/app/types/contacts.types';
import ContactCard from '@/components/contacts/card';
import { useState } from 'react';

type ContentProp = {
  contacts: ContactsArray;
};

const Content = ({ contacts }: ContentProp) => {
  // State for storing friends list
  const [friends, setFriends] = useState<ContactsArray>([]);

  // State for updated contact list (excluding friends)
  const [updatedContacts, setUpdatedContacts] = useState<ContactsArray>(contacts);

  // Function to handle adding/removing friends
  const handleAddFriends = (id: number) => {
    // Check if the contact is already in the friends list
    const isContactAdded = friends.find((contact) => contact.id === id);

    if (isContactAdded) {
      // If contact is a friend, remove it from friends and add back to contacts
      setFriends(friends.filter((friend) => friend.id !== id));
      setUpdatedContacts([...updatedContacts, isContactAdded]);
    } else {
      // If contact is not a friend, add to friends and remove from contacts
      const contact = updatedContacts.find((contact) => contact.id === id);
      if (contact) {
        setFriends([contact, ...friends]);
        setUpdatedContacts(updatedContacts.filter((contact) => contact.id !== id));
      }
    }
  };

  return (
    <>
      {/* Contacts Section */}
      <div>
        <h1 className='py-8 text-[40px] font-semibold'>Contacts</h1>
        <ul className='flex flex-col gap-y-4'>
          {/* Map through updatedContacts and display each contact */}
          {updatedContacts.map((contact: Contact) => (
            <ContactCard key={contact.id} contact={contact} handleAddFriends={handleAddFriends} isFriend={false} />
          ))}
        </ul>
      </div>

      {/* Friends Section */}
      <div>
        <h1 className='py-8 text-[40px] font-semibold'>Friends</h1>
        <ul className='flex flex-col gap-y-4'>
          {/* Map through friends list and display each friend */}
          {friends.map((contact: Contact) => (
            <ContactCard key={contact.id} contact={contact} handleAddFriends={handleAddFriends} isFriend={true} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Content;
