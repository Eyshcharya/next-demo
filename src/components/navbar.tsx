import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const menuItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Contacts',
      path: '/contacts',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];
  return (
    <nav className='w-full z-50 sticky top-0 left-0 p-4 px-8 bg-blue-500 items-center justify-between flex'>
      <Image src={'/logo.png'} alt={'logo'} width={50} height={50} />
      <div className='flex gap-4'>
        {menuItems.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
