import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ title, description, image, path }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          url
          keywords
          twitterUsername
        }
      }
    }
  `)

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: `${site.siteMetadata.url}${image}`,
    url: `${site.siteMetadata.url}${path || ``}`,
    twitterUsername: site.siteMetadata.twitterUsername,
  }
  return (
    <>
      <html lang="en-US" />
      <title>
        {seo.title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
}

export default SEO
