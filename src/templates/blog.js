import React from 'react';
import {
  graphql,
  Link
} from 'gatsby';
import * as styles from './blog.module.scss';
import * as utilStyles from '../styles/utils.module.scss';
import { capitalize } from '../helpers/strHelper';

import SEO from '../components/meta/seo';
import Layout from '../components/layout/layout';
import CategorySidebar from '../components/blog/categorySidebar';

export const data = graphql`
  query contentfulBlogPostQuery($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: {createdAt: DESC}
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
      <SEO title='Blog' />
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
                    <Link to={`/blog/post/${slug}`}>Read it here</Link>
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
              <Link to={`${prev}`} className={`${utilStyles.button}`}>Prev Page</Link>
            ) : (
              'First Page'
            )
          }
        </div>
        <div>
          {
            next ? (
              <Link to={`${next}`} className={`${utilStyles.button}`}>Next Page</Link>
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