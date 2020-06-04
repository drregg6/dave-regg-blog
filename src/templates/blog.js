import React from 'react';
import {
  graphql,
  Link
} from 'gatsby';
import styles from './blog.module.scss';
import utilStyles from '../styles/utils.module.scss';
import { capitalize } from '../helpers/strHelper';

import Head from '../components/meta/head';
import Layout from '../components/layout/layout';
import CategorySidebar from '../components/blog/categorySidebar';

export const data = graphql`
  query contentfulBlogPostQuery($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: {fields: createdAt, order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          publishedDate(formatString: "DD MMM YYYY")
          slug
          title
          description
          category
        }
      }
    }
  }
`

const Blog = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  return (
    <Layout>
      <Head title='Blog' />
      <div className={`${utilStyles.mb1} ${utilStyles.jcenter}`}>
        <h1 className={`${utilStyles.doubleSize}`}>All Posts</h1>
      </div>
      <div className={styles.blog}>
        <ol className={styles.posts}>
          {
            data.allContentfulBlogPost.edges.map(({ node }) => {
              let desc;
              if (node.description) {
                desc = node.description;
              } else {
                desc = 'If you would like to read this post, please follow the post link!';
              }
              const { title, slug, publishedDate, category } = node;
              return (
                <>
                  <li className={`${utilStyles.mtb2} ${styles.post}`} key={node.id}>
                    <div className={styles.postHeader}>
                      <span>{publishedDate}</span>
                      <span>
                        <Link to={`/blog/category/${category}`}>{capitalize(category)}</Link>
                      </span>
                    </div>
                    <Link to={`/blog/post/${slug}`}>
                      <h1 className={`${utilStyles.aLittleLarger} ${utilStyles.primaryText}`}>{title}</h1>
                    </Link>
                    <p className={styles.postDesc}>{desc}</p>
                    <Link to={`/blog/post/${slug}`} className={styles.postRead}>Read it here</Link>
                  </li>
                  <hr />
                </>
              )
            })
          }
        </ol>
        <CategorySidebar />
      </div>
      <div className={`${styles.pagination} ${utilStyles.mt1}`}>
        <div>
        {
            prev ? (
              <Link to={`${prev}`} className={`${styles.prev} ${utilStyles.button}`}>Prev Page</Link>
            ) : (
              'First Page'
            )
          }
        </div>
        <div>
          {
            next ? (
              <Link to={`${next}`} className={`${styles.next} ${utilStyles.button}`}>Next Page</Link>
            ) : (
              'Last Page'
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default Blog;