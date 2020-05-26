import React from 'react';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import styles from './header.module.scss'

import Nav from './nav';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <header className={styles.header}>
      <h1>{ title }</h1>
      <Nav />
    </header>
  )
}

export default Header;