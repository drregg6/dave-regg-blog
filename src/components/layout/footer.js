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
  const { author } = data.site.siteMetadata;
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.header}>
            About Me
          </h2>
          <p className={styles.about}>
            I am a programmer from Philadelphia. Read about my life, projects, and hobbies on my blog, or check out my portfolio on my personal website.
          </p>
        </div>
        <div>
          <h2 className={styles.header}>
            Get in Contact
          </h2>
          <ul className={`${styles.contact} ${styles.list}`}>
            <li>Personal Website</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.header}>
            Categories
          </h2>
          <ul className={`${styles.categories} ${styles.list}`}>
            <li>Programming</li>
            <li>Meta</li>
            <li>Work</li>
            <li>Mental Health</li>
            <li>Other Hobbies</li>
          </ul>
        </div>
        
      </div>
      <p className={styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} <a href="http://www.daveregg.com" rel="noopener noreferrer" target="_blank">{author}</a>
        </p>
    </footer>
  )
}

export default Footer;