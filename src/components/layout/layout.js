import React from "react"
import * as styles from "./layout.module.scss"
import * as utilStyles from "../../styles/utils.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ isHome, isPost, title, image, children }) => {
  return (
    <div className={`${styles.container} ${utilStyles.fullWidth}`}>
      <div className={styles.content}>
        <Header image={image} title={title} isHome={isHome} />
        <div className={styles.main}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
