import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost (
      slug: {
        eq: $slug
      }
    ) {
      title
      author
      publishedDate (formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Post = ({ data }) => {
  const { title, author, publishedDate, body } = data.contentfulBlogPost;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const src = node.data.target.field.field['en-US'].url;
        return <img src={src} alt={alt} />
      }
    }
  }
  return (
    <Layout>
      <h1>{ title }</h1>
      <small>Published on { publishedDate } by { author }</small>
      { documentToReactComponents(body.json, options) }
    </Layout>
  )
}

export default Post;