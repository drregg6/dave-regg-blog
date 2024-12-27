import React from "react"
import { Link } from "gatsby"
import { capitalize } from "../../helpers/strHelper"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./card.module.scss"
import * as utilStyles from "../../styles/utils.module.scss"

const Card = ({
  id,
  slug,
  author,
  publishedDate,
  title,
  category,
  description,
  image,
}) => {
  return (
    <div className={`${styles.card} ${utilStyles.quarterWidth}`} key={id}>
      <Link to={`/blog/post/${slug}`} className={styles.image}>
        <GatsbyImage
          className={`${styles.gatsbyImgWr}`}
          imgClassName={`${styles.gatsbyImg}`}
          image={image}
          alt={description}
          title={title}
        />
        <div
          className={`${utilStyles.lightBackground} ${utilStyles.aLittleSmaller} ${styles.category}`}
        >
          <Link to={`/blog/category/${category}`}>{capitalize(category)}</Link>
        </div>
      </Link>
      <header
        className={`${styles.header} ${utilStyles.jcenter} ${utilStyles.mtb2}`}
      >
        <Link to={`/blog/post/${slug}`}>
          <h1
            className={`${utilStyles.aLittleLarger} ${utilStyles.primaryText}`}
          >
            {title}
          </h1>
        </Link>
        <div className={`${styles.info}`}>
          <p className={`${utilStyles.italic} ${utilStyles.aLittleSmaller}`}>
            {author}
          </p>
          <small
            className={`${utilStyles.italic} ${utilStyles.aLittleSmaller}`}
          >
            {publishedDate}
          </small>
        </div>
      </header>
      <div className={styles.desc}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
