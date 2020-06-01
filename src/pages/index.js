/*

https://gooyaabitemplates.com/flamingo-blogger-template-2/

TODO:
= .footer styles for mobile
= Blog Page styles
= Blog Page pagination
= Index Page card styles

*/

import React from 'react';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import styles from './index.module.scss';

import Head from '../components/meta/head';
import Layout from '../components/layout/layout';
import Card from '../components/homepage/card';

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 5, sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            author
            slug
            title
            category
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
            const { id, author, slug, publishedDate, title, category, description } = node;
            return (
              <Card
                id={id}
                author={author}
                key={id}
                slug={slug}
                publishedDate={publishedDate}
                title={title}
                category={category}
                description={description}
                src={src}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}
