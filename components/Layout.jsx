import React from 'react';

import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useStateContext } from '../context/StateContext';
const Layout = ({ children }) => {
  const { theme } = useStateContext();
  return (
    <div className="layout" style={theme}>
      <Head>
        <title>e-Commerce</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
