import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';
import styles from './footer.module.scss';
import elfie from '../../images/blog_elfie.jpeg';

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
          <div className={styles.about}>
            <img src={elfie} alt="Custom yellow elfie" />
            <p>
              Follow along as I teach myself how to program in Javascript! I write creating and writing my own pet projects. This means the code it takes, the technologies I learn, and the frustrations I overcome. I also write about struggles dealing with being self-taught, finding a job, and juggling life, a fulltime job, and mental health issues.
            </p>
          </div>
        </div>
        <div>
          <h2 className={styles.header}>
            Get in Contact
          </h2>
          <ul className={`${styles.contact} ${styles.list}`}>
            <li>
              <a href="http://www.daveregg.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-desktop"></i></a>
            </li>
            <li>
              <a href="https://www.twitter.com/daveregg" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daveregg" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://github.com/drregg6" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            </li>
          </ul>
        </div>
        <div className={styles.categoryDiv}>
          <h2 className={styles.header}>
            Categories
          </h2>
          <ul className={`${styles.categories} ${styles.list}`}>
            <li>
              <Link to="/blog">All</Link>
            </li>
            <li>
              <Link to="/blog/category/programming">Programming</Link>
            </li>
            <li>
              <Link to="/blog/category/meta">Meta</Link>
            </li>
            <li>
              <Link to="/blog/category/work">Work</Link>
            </li>
            <li>
              <Link to="/blog/category/mental">Mental Health</Link>
            </li>
            <li>
              <Link to="/blog/category/hobbies">Other Hobbies</Link>
            </li>
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