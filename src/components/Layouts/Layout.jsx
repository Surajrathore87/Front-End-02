import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';

const Header = dynamic(import('components/Common/Header'));
const Footer = dynamic(import('components/Common/Footer'));

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <ToastContainer />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
