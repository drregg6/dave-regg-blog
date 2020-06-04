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
      <div className={`${utilStyles.mb1} ${utilStyles.jcenter}`}>
        <h1 className={`${utilStyles.doubleSize}`}>{capitalize(pageContext.category)} Posts</h1>
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
                      <span>{capitalize(category)}</span>
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
    </Layout>
  )
}

export default Category;