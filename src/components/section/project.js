import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Project = () => (
  <StaticQuery 
    query={graphql`
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
                    fluid(
                      fit: CONTAIN, 
                      jpegProgressive: true,
                      maxHeight: 400, 
                      maxWidth: 400
                      ) 
                    { 
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id='project' className='container-fluid text-center mb-4'>  
        <h2 className='pb-4 font-weight-bold text-uppercase'>Projects</h2>
        <div className='row'>
        { 
          data.allProjectsJson.edges.map(({ node }) => {
            const { id, title, description, github, demo, image  } = node;
            const img = image.src.childImageSharp; 
            return (
              <div className='col-sm-6 col-lg-4 mb-4' key={id}>
                <div className='container text-center'>
                  <div className='container bg-primary py-2'>
                    <h6 className='my-auto'>{title}</h6>
                  </div>
                  {/* Gatsby Image Tag */} 
                  <Img
                    key={img.id} 
                    fluid={img.fluid} 
                    alt={title} 
                  /> 
                  <div className='container d-flex justify-content-center align-items-center pl-0 my-3'>
                    <a role='button' className='btn btn-sm btn-outline-primary' href={github}>Github</a>
                    {
                      demo 
                      ? <a role='button' className='btn btn-sm btn-outline-primary pl-1' href={demo}>Demo</a>
                      : <button type='button' className='btn btn-sm btn-outline-primary pl-1'   disabled>Demo</button>
                    }
                  </div>
                  <div className='container text-left'>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ) 
          })
        }
        </div>
      </div>
    )} 
  />
)

export default Project