import { Contact } from '@/app/types/contacts.types';
import { getRandomArrayElement } from '@/utils/get-random-array-element';
import Image from 'next/image';

type CardProps = {
  contact: Contact;
  handleAddFriends: (id: number) => void;
  isFriend?: boolean;
};

const ContactCard = ({ contact, handleAddFriends, isFriend = false }: CardProps) => {
  return (
    <li className='p-6 border flex items-center justify-between gap-3 rounded-[20px]'>
      <div className='relative -top-1/3 aspect-square w-[80px] overflow-hidden rounded-full z-0 border-[6px] bg-gray-100'>
        <Image
          src={`https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement()}.webp`}
          alt='profile-pic'
          fill
          sizes='(max-width: 768px) 100vw'
          className='aspect-auto'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-xl'>{contact.name}</p>
        <p className='text-sm opacity-80'>{contact.email}</p>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-xl'>{contact.company.name}</p>
        <p className='text-sm opacity-80'>{contact.phone}</p>
      </div>

      <button type='button' onClick={() => handleAddFriends(contact.id)} className='rounded-md p-2 px-4 text-white  bg-green-500'>
        {!isFriend ? 'Add Friend' : 'Remove Friend'}
      </button>
    </li>
  );
};
export default ContactCard;
