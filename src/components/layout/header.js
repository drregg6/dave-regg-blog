import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';
import styles from './header.module.scss';
import utilStyles from '../../styles/utils.module.scss';

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
  const { src, title, isHome, isPost } = props;
  const siteTitle = data.site.siteMetadata.title;
  
  return (
    <header className={`${styles.header}`}>
      <Nav siteTitle={siteTitle} />
      <div
        className={`${styles.hero} ${utilStyles.fullWidth} ${utilStyles.center}`}
        style={{
          background: `rgba(0,0,0,0.2) url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'darken'
        }}
      >
        <div className={`${utilStyles.jcenter}`}>
          {
            !isPost && (
              <h1 className={`${utilStyles.title} ${utilStyles.mb2}`}>{ title ? title : siteTitle }</h1>
            )
          }
          { isHome && (
              <Link to="/blog" className={`${utilStyles.button}`}>Read more &rArr;</Link>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header;