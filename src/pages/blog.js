import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';

import Layout from '../components/layout/layout';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
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
      <h1>Hey there, from Blog!</h1>
      {
        data.allContentfulBlogPost.edges.map(({ node }) => {
          const { title, author, slug, publishedDate, description } = node;
          return (
            <div>
              <Link to={`/blog/${slug}`}>
                <h1>{title}</h1>
                <small>Published on {publishedDate} by {author}</small>
                <p>{description}</p>
              </Link>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default Blog;