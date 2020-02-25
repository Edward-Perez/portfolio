import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <div className='jumbotron vh-100 bd-transparent text-center'>
      <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
      <Link to='/'><h5>Go back to the homepage</h5></Link>
    </div>
  </Layout>
)

export default NotFoundPage
