import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
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
  const { src, title, isHome } = props;
  const siteTitle = data.site.siteMetadata.title;
  
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link to="/">
          <h1>{ siteTitle }</h1>
        </Link>
        <Nav />
      </div>
      <div
        className={styles.hero}
        style={{
          background: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div>
          <h1>{ title ? title : siteTitle }</h1>
          { isHome && (
              <Link to="/blog" className={styles.button}>Read more &rArr;</Link>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header;