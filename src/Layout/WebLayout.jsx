import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';
import ContactFooter from '../Components/Shared/ContactFooter/ContactFooter';

export default function WebLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
      <ContactFooter />
      <Footer />
    </>
  );
}
