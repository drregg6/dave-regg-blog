import React from 'react';
import styles from './header.module.scss'

import Nav from './nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Dave Regg's Blog</h1>
      <Nav />
    </header>
  )
}

export default Header;