import React from 'react';
import styles from './layout.module.scss';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;