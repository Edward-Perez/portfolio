import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Button  } from 'react-bootstrap'

const Project = () => (
  <Container  id='project' className='text-center mb-4' fluid>  
    <h2 className='pb-4 font-weight-bold text-uppercase'>Projects</h2>
    <Row>
    { 
      ProjectData().map(({ node }) => {
        const { id, title, description, github, demo, image  } = node;
        const img = image.src.childImageSharp; 
        return (
          <Col sm={12} md={6} lg={4} className='mb-4' key={id}>
            <Container className='text-center'>
              <Container className='bg-primary py-2'>
                <h6 className='my-auto'>{title}</h6>
              </Container>
                {/* Gatsby Image Tag */} 
                <Img
                  imgStyle={{
                    height: '100%',
                    width: '100%',
                  }}
                  key={img.id} 
                  fluid={img.fluid} 
                  alt={title} 
                /> 
              <Container className='d-flex justify-content-center align-items-center pl-0 my-3'>
                <Button variant='outline-primary' href={github} size='sm' target='_blank'>Github</Button>
                {
                  demo 
                  ? <Button variant='outline-primary' size='sm' href={demo} className='pl-1' target='_blank'>Demo</Button>
                  : <Button variant='outline-primary' size='sm' className='pl-1' disabled>Demo</Button>
                }
              </Container>
              <Container className='text-left'>
                <p>{description}</p>
              </Container>
            </Container>
          </Col>
        ) 
      })
    }
    </Row>
  </Container>
)


const ProjectData = () => {
  const { allProjectsJson }  = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              github
              description
              demo
              title
              image {
                src {
                  childImageSharp {
                    id
                    fluid(fit: CONTAIN, maxHeight: 400, maxWidth: 400, quality: 100, webpQuality: 100, jpegQuality: 100) { 
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
    return allProjectsJson.edges;
}

export default Project