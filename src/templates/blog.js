import React from 'react';
import {
  graphql,
  Link
} from 'gatsby';
import styles from './blog.module.scss';
import { capitalize } from '../helpers/strHelper';

import Head from '../components/meta/head';
import Layout from '../components/layout/layout';

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
      <div className={styles.pageTitle}>
        <h1>All Posts</h1>
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
                  <li className={styles.post} key={node.id}>
                    <div className={styles.postHeader}>
                      <span>{publishedDate}</span>
                      <span className={styles.category}>
                        <Link to={`/blog/category/${category}`}>{capitalize(category)}</Link>
                      </span>
                    </div>
                    <Link to={`/blog/post/${slug}`}>
                      <h1 className={styles.postTitle}>{title}</h1>
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
        <div className={styles.categories}>
          <h2>Search by category</h2>
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
      </div>
      <div className={styles.pagination}>
        <div>
        {
            prev ? (
              <Link to={`${prev}`} className={`${styles.prev} ${styles.button}`}>Prev Page</Link>
            ) : (
              'First Page'
            )
          }
        </div>
        <div>
          {
            next ? (
              <Link to={`${next}`} className={`${styles.next} ${styles.button}`}>Next Page</Link>
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