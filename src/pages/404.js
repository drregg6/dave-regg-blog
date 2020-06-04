import React from 'react';
import { Link } from 'gatsby';

import Head from '../components/meta/head';
import Layout from '../components/layout/layout';

const NotFound = () => (
  <Layout>
    <Head title="404" />
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