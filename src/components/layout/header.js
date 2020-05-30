import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
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
      <div className={styles.nav}>
        <h1>{ title }</h1>
        <Nav />
      </div>
      <div
        className={styles.hero}
        style={{
          background: `url("https://placekitten.com/g/960/400")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div>
          <h1>Dave Regg's Blog</h1>
          <Link to="/blog" className={styles.button}>Read more here &rArr;</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;