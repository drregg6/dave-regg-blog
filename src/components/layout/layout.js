import React from 'react';
import styles from './layout.module.scss';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  let src = '';
  let title = '';
  if (props.src) {
    src = props.src;
    title = props.title;
  } else {
    src = 'https://placekitten.com/g/960/400';
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header src={src} title={title} isHome={props.isHome} />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;