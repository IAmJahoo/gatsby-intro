import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home page</h1>
    <p>Hello, frontend masters</p>
    <Link to="/about">To about page</Link>
  </Layout>
);
