import React from 'react';
import { Link } from 'gatsby';

import * as styles from './categorySidebar.module.scss';
import * as utilStyles from '../../styles/utils.module.scss';

const CategorySidebar = () => {
  return (
    <div className={styles.categories}>
      <h2 className={`${utilStyles.normSize} ${utilStyles.mb1}`}>Search by category</h2>
      <ul>
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
          <Link to="/blog/category/mental">Mental health</Link>
        </li>
        <li>
          <Link to="/blog/category/hobbies">Other hobbies</Link>
        </li>
      </ul>
    </div>
  )
}

export default CategorySidebar;