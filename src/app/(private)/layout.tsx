import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <div className='px-8'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
