import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const Contact = () => {
  const { mobile, tablet, desktop } = EdwardImg();
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
    <Container as='section' id='contact' className='text-center mt-4' fluid>
      <h2 className='pt-3 font-weight-bold text-uppercase'>Contact</h2>
      <Row>
        <Col sm={12} md={6} className='py-3'>
          <Img fixed={sources} alt='Edward at the Houston Zoo.' />  {/* Gatsby Img */}
        </Col>

        <Col sm={12} md={6} className='py-3'>
          <Col sm={12}>
            <h4 className='mb-4 text-primary'>This Is Me</h4>
            <p className='text-left text-wrap' style={{wordSpacing: '.12rem'}}>
               Born and raised in Houston, Texas and the constant momentum of the technological frontier is what drives my ambition to this field. I personally have a deep admiration for some of the most profound industry leaders in the world such as Jamie Dimon, Jeff Bezos, and Peter Thiel, all of whom focus and thrive in the frontier. I have committed to living a life that is in a constant learning trajectory, which is why I believe you should hire me. 
            </p>
          </Col>

          <Col sm={12}>
            <ListGroup>
              <ListGroup.Item className='pb-1 bg-transparent'>Edward Perez</ListGroup.Item>
              <ListGroup.Item className='pb-1 bg-transparent'>edward.121489@gmail.com</ListGroup.Item>
              <ListGroup.Item className='pb-1 bg-transparent'>076-134 86 35</ListGroup.Item>
              <ListGroup.Item className='pb-1 bg-transparent'>Kalmar, Sweden</ListGroup.Item>
            </ListGroup>
          </Col>
        </Col>
      </Row>
    </Container>  
  )
}

const EdwardImg = () => {
  const { mobile, tablet, desktop }  = useStaticQuery(
    graphql`
    query  {
      mobile : file(relativePath: {eq: "edward.jpg"}) {
        id
        childImageSharp {
          fixed(fit: CONTAIN, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tablet: file(relativePath: {eq: "edward.jpg"}) {
        id
        childImageSharp {
          fixed(fit: CONTAIN, height: 350, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(relativePath: {eq: "edward.jpg"}) {
        id
        childImageSharp {
          fixed(fit: CONTAIN, height: 400, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `
  )
  return { mobile, tablet, desktop } ;
}

export default Contact