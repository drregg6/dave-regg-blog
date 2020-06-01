import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';
import styles from './blog.module.scss';

import Head from '../components/meta/head';
import Layout from '../components/layout/layout';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            author
            publishedDate(formatString: "DD MMM YYYY")
            slug
            title
            description
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Head title='Blog' />
      <div className={styles.blog}>
        <div className={styles.categories}>
          <h2>Search by category</h2>
          <ul>
            <li>
              <Link to="/blog">Programming</Link>
            </li>
            <li>
              <Link to="/blog">Meta</Link>
            </li>
            <li>
              <Link to="/blog">Work</Link>
            </li>
            <li>
              <Link to="/blog">Mental health</Link>
            </li>
            <li>
              <Link to="/blog">Other hobbies</Link>
            </li>
          </ul>
        </div>
        <ol className={styles.posts}>
          {
            data.allContentfulBlogPost.edges.map(({ node }) => {
              const { title, author, slug, publishedDate, description } = node;
              return (
                <li className={styles.post} key={node.id}>
                  <Link to={`/blog/${slug}`} className={styles.post} key={node.id}>
                    <h1>{title}</h1>
                    <small>Published on {publishedDate} by {author}</small>
                    {
                      description && <p>{description}</p>
                    }
                  </Link>
                </li>
              )
            })
          }
        </ol>
      </div>
    </Layout>
  )
}

export default Blog;