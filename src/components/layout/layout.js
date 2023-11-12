import React from 'react';
import * as styles from './layout.module.scss';
import * as utilStyles from '../../styles/utils.module.scss';

import heroImage1 from '../../images/hero-images/hero-background-1.jpg';
import heroImage2 from '../../images/hero-images/hero-background-2.jpg';
import heroImage3 from '../../images/hero-images/hero-background-3.jpg';
import heroImage4 from '../../images/hero-images/hero-background-4.jpg';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  let image = '';
  let title = '';
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  if (props.image) {
    image = props.image;
    title = props.title;
  } else {
    image = heroImages[Math.floor(Math.random() * heroImages.length)];
  }
  return (
    <div className={`${styles.container} ${utilStyles.fullWidth}`}>
      <div className={styles.content}>
        <Header image={image} title={title} isHome={props.isHome} isPost={props.isPost} />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;