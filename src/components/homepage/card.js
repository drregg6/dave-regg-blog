import React from 'react';
import { Link } from 'gatsby';
import { capitalize } from '../../helpers/strHelper';

import styles from './card.module.scss';

const Card = ({
  id,
  slug,
  author,
  publishedDate,
  title,
  category,
  description,
  src
}) => {
  return (
    <div className={styles.card} key={id}>
      <Link to={`/blug/${slug}`} className={styles.image}>
        <img src={src} alt="" />
        <div className={styles.category}>
          {capitalize(category)}
        </div>
      </Link>
      <header className={styles.header}>
        <Link to={`/blog/${slug}`}><h1 className={styles.title}>{title}</h1></Link>
        <div className={styles.info}>
          <p>
            {author}
          </p>
          <small>
            {publishedDate}
          </small>
        </div>
      </header>
      <div className={styles.desc}>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card;