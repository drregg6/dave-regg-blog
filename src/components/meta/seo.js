import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {
  graphql,
  useStaticQuery
} from 'gatsby';

const SEO = ({ description, lang, meta, image: metaImage, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          keywords
          twitterUsername
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description;
  const image = metaImage && metaImage.src ? `http:${metaImage.src.fixed.src}` : null;
  console.log(image)
  return (
    <Helmet
    htmlAttributes={{ lang }}
    title={`${title} | ${site.siteMetadata.title}`}
    meta={[
      {
        name: `description`,
        content: metaDescription
      },
      {
        name: `keywords`,
        content: site.siteMetadata.keywords.join(',')
      },
      {
        property: `og:title`,
        content: title
      },
      {
        property: `og:description`,
        content: metaDescription
      },
      {
        property: `og:type`,
        content: `website`
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata.twitterUsername
      },
      {
        name: `twitter:title`,
        content: title
      },
      {
        name: `twitter:description`,
        content: metaDescription
      },
    ]
      .concat(
        metaImage ? 
        [
          {
            property: `og:image`,
            content: image
          },
          {
            property: `og:image:width`,
            content: metaImage.src.fixed.width
          },
          {
            property: `og:image:height`,
            content: metaImage.src.fixed.height
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`
          }
        ] : [
          {
            name: `twitter:card`,
            content: `summary`
          }
        ]
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
  })
}

export default SEO;