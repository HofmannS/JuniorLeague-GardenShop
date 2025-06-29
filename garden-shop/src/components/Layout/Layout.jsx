import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.jsx';

const Layout = () => {
  return (
    <>
      <Header />
       <main>
        <Outlet />
       </main>
      <Footer />
    </>
  );
};

export default Layout;