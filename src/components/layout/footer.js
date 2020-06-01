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
      <h2 className={styles.header}>
        About Me
      </h2>
      <h2 className={styles.header}>
        Blog Categories
      </h2>
      <h2 className={styles.header}>
        Get in Contact
      </h2>
      <div className={styles.content}>
        <p className={styles.about}>
          I am a programmer from Philadelphia. Read about my life, projects, and hobbies on my blog, or check out my portfolio on my personal website.
        </p>
      </div>
      <ul className={styles.content}>
        <li>Programming</li>
        <li>Meta</li>
        <li>Work</li>
        <li>Mental Health</li>
        <li>Other Hobbies</li>
      </ul>
      <ul className={styles.content}>
        <li>Personal Website</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Github</li>
      </ul>
      <div className={styles.copyright}>
        <p>
          Copyright &copy; {new Date().getFullYear()} <a href="http://www.daveregg.com" rel="noopener noreferrer" target="_blank">{author}</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;