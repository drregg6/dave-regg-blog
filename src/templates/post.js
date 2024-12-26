import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as styles from "./post.module.scss"
import * as utilStyles from "../styles/utils.module.scss"

import SEO from "../components/meta/seo"
import Layout from "../components/layout/layout"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      author
      description
      publishedDate(formatString: "DD MMM YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 720)
            __typename
          }
        }
      }
      splashImage {
        gatsbyImageData(width: 960)
      }
    }
  }
`

export const Head = ({ data }) => {
  const { title, description, image, slug } = data.contentfulBlogPost
  return (
    <SEO
      title={title}
      description={description}
      image={image}
      path={`blog/post/${slug}`}
    />
  )
}

const Post = ({ data, pageContext }) => {
  const { prev, next } = pageContext
  const { title, author, publishedDate, body, splashImage } =
    data.contentfulBlogPost
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <GatsbyImage
            className={`${styles.postImgWr} ${utilStyles.mb1}`}
            imgClassName={`${styles.postImg}`}
            objectFit="scale-down"
            image={getImage(gatsbyImageData)}
            alt={description ? description : "A really cool image"}
            formats={["auto", "webp", "avif", "jpg"]}
          />
        )
      },
    },
  }
  let image = ""
  if (splashImage) {
    image = getImage(splashImage)
  } else {
    image = "https://placekitten.com/g/960/400"
  }
  return (
    <Layout image={image} title={title} isPost>
      <div className={`${utilStyles.mb3}`}>
        <h1 className={`${utilStyles.title} ${utilStyles.doubleSize}`}>
          {title}
        </h1>
        <p className={`${utilStyles.subtitle} ${utilStyles.normSize}`}>
          Published on {publishedDate} by {author}
        </p>
      </div>
      <div className={`${styles.post} ${utilStyles.normSize}`}>
        {renderRichText(body, options)}
      </div>
      <div className={`${utilStyles.mt3} ${styles.postLinks}`}>
        <div>
          {prev ? (
            <Link
              to={`/blog/post/${prev.slug}`}
              className={`${utilStyles.button}`}
            >
              Prev Post
            </Link>
          ) : (
            "First Post"
          )}
        </div>
        <div>
          {next ? (
            <Link
              to={`/blog/post/${next.slug}`}
              className={`${utilStyles.button}`}
            >
              Next Post
            </Link>
          ) : (
            "Latest Post"
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Post
