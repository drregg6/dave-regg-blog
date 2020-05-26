import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright <a href="http://www.daveregg.com" rel="noopener noreferrer" target="_blank">Dave Regg</a>
      </p>
    </footer>
  )
}

export default Footer;