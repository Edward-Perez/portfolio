import React from 'react'
import { Link } from 'gatsby'
import { Jumbotron } from 'react-bootstrap'

import Layout from '@utility/layout'
import SEO from '@utility/seo'


const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Jumbotron className='vh-100 bd-transparent text-center'>
      <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
      <Link to='/'><h5>Go back to the homepage</h5></Link>
    </Jumbotron>
  </Layout>
)

export default NotFoundPage
