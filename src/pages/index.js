/*

Design ideas thanks to:
https://gooyaabitemplates.com/flamingo-blogger-template-2/

TODO:
= Darken splash image backgrounds
= Dynammically render static images
= Add images within blog posts (among other elements)
= Move category down on cards
= Remove console logs
= Pagination on Category pages
= New color scheme

DOWN THE LINE
= Desc functionality (elasticlunr)
= Search by desc / title

*/

import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as styles from "./index.module.scss"
import * as utilStyles from "../styles/utils.module.scss"

import SEO from "../components/meta/seo"
import Layout from "../components/layout/layout"
import Card from "../components/homepage/card"

export const Head = () => {
  return <SEO title="Home" />
}

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 5, sort: { createdAt: DESC }) {
        edges {
          node {
            author
            slug
            title
            category
            publishedDate(formatString: "DD MMM YYYY")
            description
            splashImage {
              gatsbyImageData(width: 360)
            }
          }
        }
      }
    }
  `)
  return (
    <Layout isHome>
      <div className={styles.cards}>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          const image = node.splashImage
            ? getImage(node.splashImage)
            : "https://www.placehold.it/400x300"
          const {
            id,
            author,
            slug,
            publishedDate,
            title,
            category,
            description,
          } = node
          return (
            <Card
              key={id}
              id={id}
              author={author}
              slug={slug}
              publishedDate={publishedDate}
              title={title}
              category={category}
              description={description}
              image={image}
            />
          )
        })}
        <Link
          to="/blog"
          className={`${styles.readMore} ${utilStyles.center} ${utilStyles.lightBackground}`}
        >
          Check out earlier posts
        </Link>
      </div>
    </Layout>
  )
}
