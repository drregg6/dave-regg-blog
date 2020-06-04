import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/meta/seo';
import Layout from '../components/layout/layout';

const NotFound = () => (
  <Layout>
    <SEO title="404" />
    <h1>Nothing exists here!</h1>
    <p>
      Be sure to come back and see what we have in store for this page
    </p>
    <p>
      <Link to="/">Head home</Link>
    </p>
  </Layout>
)

export default NotFound;