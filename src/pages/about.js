import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>That's my personal webpage</p>
    <Link to="/">&larr; back to homepage </Link>
  </Layout>
);
