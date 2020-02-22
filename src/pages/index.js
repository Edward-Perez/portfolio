import React from 'react'

import Layout from '@utility/layout'
import SEO from '@utility/seo'

import Navbar from '@common/navbar'
import Footer from '@common/footer'

import Header from '@section/header'
import Project from '@section/project'
import Contact from '@section/contact'
import Certificate from '@section/certificate'

const IndexPage = () => (
  <Layout>
    <SEO title='Welcome' />
    <Navbar />
    <Header />
    <Project />
    <Certificate />
    <Contact /> 
    <Footer />
  </Layout>
)

export default IndexPage
