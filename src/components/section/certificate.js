import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import TreehouseSvg from '../../data/images/svg/treehouse.svg'

const Certificate = () => (
  <StaticQuery 
    query={graphql`
      query  {
        file(relativePath: {eq: "treehouse-certificate.jpg"}) {
          id
          childImageSharp {
            fluid(fit: CONTAIN, jpegProgressive: true, jpegQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
    }
    render={({file}) => (
      <div id='certificate' className='container-fluid text-center my-4'>
        <h2 className='pt-3 font-weight-bold text-uppercase'>Certificate</h2>
        <div className='row'>
          <div className='col-sm-12 col-md-6 py-3'>
            {/* Gatsby Img */}
            <div className='container'>
              <Img 
                fluid={file.childImageSharp.fluid} 
                alt='Treehouse Full Stack Certificate.' 
                loading='lazy'
              />
            </div>
          </div>
          <div className='col-sm-12 col-md-6 py-3'>
            <a className='nav-link' href='https://teamtreehouse.com/'>
              <TreehouseSvg width='200' height='50'/>
            </a>
            <div className="container text-left text-wrap text-break">
              <p className='pt-1'>Treehouse is an online technology school that offers specific courses and guided learning paths also known as Tech Degree's.</p>
              <p className='pt-1'>The Full Stack Javascript Tech Degree program certifies proficiency in the fundamentals of Javascript, Node, React, Express and SQL after the completion of 10 projects and a final exam.</p>
              <p className='pt-1'>I have completed all 10 projects with a grade of Exceeds Expection and completed many courses not related to the TechDegree program. You can visit my Treehouse Profile to view over 23,000 points and 229 achievements.</p>
            </div>
            <a role='button' className='btn btn-primary' href='https://teamtreehouse.com/edwardperez'>
              Treehouse Profile
            </a>
          </div>
        </div>
      </div>
    )}
  />
)

export default Certificate