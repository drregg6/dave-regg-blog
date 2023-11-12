import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './header.module.scss';
import * as utilStyles from '../../styles/utils.module.scss';

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
  const { image, title, isHome, isPost } = props;
  const siteTitle = data.site.siteMetadata.title;
  
  return (
    <header className={`${styles.header}`}>
      <Nav siteTitle={siteTitle} />
      <GatsbyImage image={image} alt="Hello world!" />
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
    </header>
  )
}

export default Header;
{/* <div
        className={`${styles.hero} ${utilStyles.fullWidth} ${utilStyles.center}`}
        style={{
          background: `rgba(0,0,0,0.2) url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'darken'
        }}
      > */}
      {/* </div> */}