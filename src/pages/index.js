/*

https://gooyaabitemplates.com/flamingo-blogger-template-2/

TODO:
= .footer styles for mobile
= Blog Page styles
= Blog Page pagination

*/

import React from 'react';
import {
  graphql,
  useStaticQuery,
  Link
} from 'gatsby';
import styles from './index.module.scss';

import Head from '../components/meta/head';
import Layout from '../components/layout/layout';

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 5, sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            author
            slug
            title
            publishedDate(formatString: "DD MMM YYYY")
            description
            splashImage {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(data);
  return (
    <Layout isHome>
      <Head title='Home' />
      <div className={styles.cards}>
        {
          data.allContentfulBlogPost.edges.map(({ node }) => {
            const src = node.splashImage ? node.splashImage.fixed.src : 'https://www.placehold.it/400x300';
            return (
              <Link to={`/blog/${node.slug}`}>
                <div
                  key={node.id}
                  className={styles.card}
                  style={{
                    backgroundImage: `url(${src})`
                  }}
                >
                  <div>
                    <h1>{node.title}</h1>
                    <small>Published on {node.publishedDate}</small>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </Layout>
  )
}
