import React from 'react';
import {
  graphql,
  Link
} from 'gatsby';
import {
  documentToReactComponents
} from '@contentful/rich-text-react-renderer';
import styles from './post.module.scss';
import utilStyles from '../styles/utils.module.scss';

import SEO from '../components/meta/seo';
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
      description
      publishedDate (formatString: "DD MMM YYYY")
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
  const { title, author, publishedDate, body, splashImage, description } = data.contentfulBlogPost;
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
    <Layout src={src} isPost>
      <SEO
        title={title}
        description={description}
        image={{
          src: splashImage
        }}
      />
      <div className={`${utilStyles.mb3}`}>
        <h1 className={`${utilStyles.title} ${utilStyles.doubleSize}`}>{ title }</h1>
        <p className={`${utilStyles.subtitle} ${utilStyles.normSize}`}>Published on { publishedDate } by { author }</p>
      </div>
      <div className={`${styles.body} ${utilStyles.normSize}`}>
        { documentToReactComponents(body.json, options) }
      </div>
      <div className={`${utilStyles.mt3} ${styles.postLinks}`}>
        <div>
        {
            prev ? (
              <Link to={`/blog/post/${prev.slug}`} className={`${utilStyles.button}`}>Prev Post</Link>
            ) : (
              'First Post'
            )
          }
        </div>
        <div>
          {
            next ? (
              <Link to={`/blog/post/${next.slug}`} className={`${utilStyles.button}`}>Next Post</Link>
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