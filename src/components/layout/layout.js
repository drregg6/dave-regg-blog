import React from 'react';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import heroImage1 from '../../images/hero-images/hero-background-1.jpg';
import heroImage2 from '../../images/hero-images/hero-background-2.jpg';
import heroImage3 from '../../images/hero-images/hero-background-3.jpg';
import heroImage4 from '../../images/hero-images/hero-background-4.jpg';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  let src = '';
  let title = '';
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  if (props.src) {
    src = props.src;
    title = props.title;
  } else {
    src = heroImages[Math.floor(Math.random() * heroImages.length)];
  }
  return (
    <div className={`${styles.container} ${utilStyles.fullWidth}`}>
      <div className={styles.content}>
        <Header src={src} title={title} isHome={props.isHome} isPost={props.isPost} />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;