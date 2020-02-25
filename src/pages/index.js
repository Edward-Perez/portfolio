import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Header from '../components/section/header'
import Project from '../components/section/project'
import Contact from '../components/section/contact'
import Certificate from '../components/section/certificate'

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
