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
  query ($category: String) {
    allContentfulBlogPost(
      sort: {fields: createdAt, order: DESC}
      filter: { category: { eq: $category } }
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

const Category = ({ data, pageContext }) => {
  return (
    <Layout>
      <Head title='Blog' />
      <div className={styles.pageTitle}>
        <h1>{capitalize(pageContext.category)} Posts</h1>
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
                      <span>{publishedDate}</span><span className={styles.category}>{capitalize(category)}</span>
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
    </Layout>
  )
}

export default Category;