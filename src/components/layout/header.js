import React from 'react';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import styles from './header.module.scss'

import Nav from './nav';

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={styles.header}>
      <h1>{data.site.siteMetadata.title}</h1>
      <Nav />
    </header>
  )
}

export default Header;