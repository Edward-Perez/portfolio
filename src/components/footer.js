import React from 'react'

import GatsbyLogoWhite from '../data/images/svg/Gatsby_Logo_White.svg'
 
const Footer = () => (
  <div className='container-fluid my-4 text-center'>
    <div className='row text-center'>
      <div className='col-sm-12 col-md-4'>
        <p className='mb-1'>Made by
          <a 
            className='nav-link d-inline' 
            href='https://github.com/Edward-Perez'
            >Edward Perez</a>
        </p>
        <p className='mb-1'>Site source code
          <a 
            className='nav-link d-inline' 
            href='https://github.com/Edward-Perez/portfolio'
            >Github</a>
        </p>
        <p className='mb-1 small'>Built with
          <a 
            className='nav-link d-inline' 
            href='https://www.gatsbyjs.org/' 
            >
            <GatsbyLogoWhite width='100'/>
          </a>
        </p>
      </div>
      <div className='col-sm-12 col-md-4 ml-auto'>
        <a className='nav-link d-inline' href='#home'>Back to top</a>
      </div>
    </div>
  </div>
)

export default Footer