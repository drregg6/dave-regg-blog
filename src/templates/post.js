import React from 'react';
import {
  graphql,
  Link
} from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './post.module.scss';

import Head from '../components/meta/head';
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
      splashImage {
        fixed(width: 960) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;

const Post = ({ data, pageContext }) => {
  const { prev, next } = pageContext;
  const { title, author, publishedDate, body, splashImage } = data.contentfulBlogPost;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const src = node.data.target.fields.file['en-US'].url;
        return <img src={src} alt={alt} />
      }
    }
  }
  let src = '';
  if (splashImage) {
    src = splashImage.fixed.src;
  } else {
    src = 'https://placekitten.com/g/960/400';
  }
  return (
    <Layout src={src} title={title}>
      <Head title={title} />
      <div className={styles.head}>
        <h1>{ title }</h1>
        <small>Published on { publishedDate } by { author }</small>
      </div>
      <div className={styles.body}>
        { documentToReactComponents(body.json, options) }
      </div>
      <div className={styles.postLinks}>
        <div>
        {
            prev ? (
              <Link to={`/blog/${prev.slug}`} className={`${styles.prev} ${styles.button}`}>Prev Post</Link>
            ) : (
              'First Post'
            )
          }
        </div>
        <div>
          {
            next ? (
              <Link to={`/blog/${next.slug}`} className={`${styles.next} ${styles.button}`}>Next Post</Link>
            ) : (
              'Latest Post'
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default Post;