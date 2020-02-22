import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import GatsbyLogoWhite from '@images/svg/Gatsby_Logo_White.svg'
 
const Footer = () => (
  <Container as='footer' className='my-4 text-center' fluid >
    <Row className='text-center'>
      <Col sm={12} md={4}>
        <p className='mb-1'>Made by
          <Nav.Link 
            className='d-inline' 
            href='https://github.com/Edward-Perez'
            target='_blank'>Edward Perez</Nav.Link>
        </p>
        <p className='mb-1'>Site source code
          <Nav.Link 
            className='d-inline' 
            href='https://github.com/Edward-Perez/gatsby-portfolio'
            target='_blank'>Github</Nav.Link>
        </p>
        <p className='mb-1 small'>Built with
          <Nav.Link 
            className='d-inline' 
            href='https://www.gatsbyjs.org/' 
            target='_blank'>
            <GatsbyLogoWhite width='100'/>
          </Nav.Link>
        </p>
      </Col>
      <Col sm={12} md={4}  className='ml-auto'>
        <Nav.Link className='d-inline' href='#home'>Back to top</Nav.Link>
      </Col>
    </Row>
  </Container>
)

export default Footer