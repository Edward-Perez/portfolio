import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Contact = () => (
  <StaticQuery 
    query={graphql`
      query {
        file(relativePath: {eq: "edward.jpg"}) {
          id
          childImageSharp {
            fluid(fit: CONTAIN, maxWidth: 800, jpegProgressive: true, jpegQuality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `
    }
    render={({file}) => (
      <div id='contact' className='container-fluid text-center mt-4'>
        <h2 className='pt-3 font-weight-bold text-uppercase'>Contact</h2>
        <div className='row'>
          <div className='col-sm-12 col-md-6 py-3'>
          <div className='container'>
          {/* Gatsby Img */}
            <Img 
              fluid={file.childImageSharp.fluid} 
              alt='Edward at the Houston Zoo.' 
              loading='lazy'
              imgStyle={{ objectFit: 'contain' }}
              />    
          </div>
          </div>
          <div className='col-sm-12 col-md-6 py-3'>
            <div className='col-sm-12'>
              <h4 className='mb-4 text-primary'>This Is Me</h4>
              <p className='text-left text-wrap' style={{wordSpacing: '.12rem'}}>
                Born and raised in Houston, Texas and the constant momentum of the technological frontier is what drives my ambition to this field. I personally have a deep admiration for some of the most profound industry leaders in the world such as Jamie Dimon, Jeff Bezos, and Peter Thiel, all of whom focus and thrive in the frontier. I have committed to living a life that is in a constant learning trajectory, which is why I believe you should hire me. 
              </p>
            </div>
            <div className='col-sm-12'>
              <ul className='list-group'>
                <li className='list-group pb-1 bg-transparent'>Edward Perez</li>
                <li className='list-group pb-1 bg-transparent'>edward.121489@gmail.com</li>
                <li className='list-group pb-1 bg-transparent'>076-134 86 35</li>
                <li className='list-group pb-1 bg-transparent'>Kalmar, Sweden</li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
    )}
  />
)
export default Contact