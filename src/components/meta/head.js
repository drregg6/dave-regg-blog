import React from 'react';
import { Helmet } from 'react-helmet';
import {
  graphql,
  useStaticQuery
} from 'gatsby';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <script src="https://kit.fontawesome.com/dfc3b70b57.js" crossorigin="anonymous"></script>
    </Helmet>
  )
}

export default Head;