import React from 'react';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import styles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={styles.footer}>
      <p>
        Copyright <a href="http://www.daveregg.com" rel="noopener noreferrer" target="_blank">{data.site.siteMetadata.author}</a>
      </p>
    </footer>
  )
}

export default Footer;