import React from 'react';
import styles from './layout.module.scss';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  let src = '';
  if (props.src) {
    src = props.src;
  } else {
    src = 'https://placekitten.com/g/960/400';
  }

  let title = '';
  if (props.title) {
    title = props.title;
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header src={src} title={title} />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;