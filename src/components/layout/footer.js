import '../../utils/fontawesome';
import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './footer.module.scss';
import * as utilStyles from '../../styles/utils.module.scss';

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
    <footer className={`${styles.footer} ${utilStyles.primaryBackground} ${utilStyles.fullWidth} ${utilStyles.ptb2}`}>
      <div className={styles.grid}>
        <div className={`${utilStyles.quarterWidth}`}>
          <h2 className={`${utilStyles.mb1} ${utilStyles.normSize} ${utilStyles.jcenter}`}>
            About Me
          </h2>
          <div className={styles.about}>
            <img src={elfie} alt="Custom yellow elfie" />
            <p>
              Follow along as I teach myself how to program in Javascript! I write creating and writing my own pet projects. This means the code it takes, the technologies I learn, and the frustrations I overcome. I also write about struggles dealing with being self-taught, finding a job, and juggling life, a fulltime job, and my own mental health.
            </p>
          </div>
        </div>
        <div className={`${utilStyles.quarterWidth}`}>
          <h2 className={`${utilStyles.mb1} ${utilStyles.normSize} ${utilStyles.jcenter}`}>
            Get in Contact
          </h2>
          <ul className={`${styles.contact} ${utilStyles.doubleSize}`}>
            <li>
              <a href="http://www.daveregg.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={'desktop'} /></a>
            </li>
            <li>
              <a href="https://www.twitter.com/daveregg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']} /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daveregg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            </li>
            <li>
              <a href="https://github.com/drregg6/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
            </li>
          </ul>
        </div>
        <div className={`${utilStyles.quarterWidth} ${styles.categoryDiv}`}>
          <h2 className={`${utilStyles.mb1} ${utilStyles.normSize} ${utilStyles.jcenter}`}>
            Categories
          </h2>
          <ul className={`${utilStyles.jcenter}`}>
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
      <p className={`${utilStyles.fullWidth} ${utilStyles.jcenter} ${styles.copyright} ${utilStyles.aLittleSmaller}`}>
        Copyright &copy; {new Date().getFullYear()} <a href="http://www.daveregg.com" rel="noopener noreferrer" target="_blank">{author}</a><br />
        Hero photo by <a href="https://unsplash.com/@irenedavila" rel="noopener noreferrer" target="_blank">Irene Dávila</a> on <a href="https://www.unsplash.com" rel="noopener noreferrer" target="_blank">Unsplash</a>
      </p>
    </footer>
  )
}

export default Footer;