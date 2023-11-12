import React from 'react';
import { Link } from 'gatsby';
import * as styles from './nav.module.scss';
import * as utilStyles from '../../styles/utils.module.scss';

const Nav = ({ siteTitle }) => {
  return (
    <div className={`${styles.nav} ${utilStyles.ptb1} ${utilStyles.center}`}>
      <Link to="/">
        <h1 className={`${utilStyles.clickable}`}>{ siteTitle }</h1>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="http://www.daveregg.com">Portfolio</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav;