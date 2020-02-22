import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'

import TreehouseSvg from '@images/svg/treehouse.svg'

const Certificate = () => {
  const { mobile, tablet, desktop } = TreehouseImg();
  const sources = [
    {
      ...desktop.childImageSharp.fixed,
      media: `(min-width: 992px)`,
    },
    {
      ...tablet.childImageSharp.fixed,
      media: `(min-width: 568px)`,
    },
    {
      ...mobile.childImageSharp.fixed,
      media: `(min-width: 0px)`,
    }
  ]
  
  return (
    <Container as='section' id='certificate' className='text-center my-4' fluid>
      <h2 className='pt-3 font-weight-bold text-uppercase'>Certificate</h2>
      <Row>
        <Col sm={12} md={6} className='py-3'>
          <Img 
            fixed={sources} 
            alt='Treehouse Full Stack Certificate.' 
          />
        </Col>
        <Col sm={12} md={6} className='py-3'>
          <Nav.Link href='https://teamtreehouse.com/' target='_blank'>
            <TreehouseSvg width='200' height='50'/>
          </Nav.Link>
          <Container className="text-left text-wrap text-break">
            <p className='pt-1'>Treehouse is an online technology school that offers specific courses and guided learning paths also known as Tech Degree's.</p>
            <p className='pt-1'>The Full Stack Javascript Tech Degree program certifies proficiency in the fundamentals of Javascript, Node, React, Express and SQL after the completion of 10 projects and a final exam.</p>
            <p className='pt-1'>I have completed all 10 projects with a grade of Exceeds Expection and completed many courses not related to the TechDegree program. You can visit my Treehouse Profile to view over 23,000 points and 229 achievements.</p>
          </Container>
          <Button href='https://teamtreehouse.com/edwardperez' target='_blank'>
            Treehouse Profile
          </Button>
        </Col>
      </Row>
    </Container>  
  )
}

const TreehouseImg = () => {
  const { mobile, tablet, desktop }  = useStaticQuery(
    graphql`
    query  {
      mobile : file(relativePath: {eq: "treehouse-certificate.jpg"}) {
        id
        childImageSharp {
          fixed(fit: CONTAIN, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tablet: file(relativePath: {eq: "treehouse-certificate.jpg"}) {
        id
        childImageSharp {
          fixed(fit: CONTAIN, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(relativePath: {eq: "treehouse-certificate.jpg"}) {
        id
        childImageSharp {
          fixed(fit: CONTAIN, height: 375, quality: 100, jpegQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `
  )
  return { mobile, tablet, desktop } ;
}

export default Certificate