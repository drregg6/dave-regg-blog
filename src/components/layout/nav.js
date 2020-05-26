import React from 'react';
import { Link } from 'gatsby';
import styles from './nav.module.scss';

const Nav = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  )
}

export default Nav;