import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;