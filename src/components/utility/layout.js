import React from "react"
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  // Smooth Scroll
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      header: '[data-scroll-header]'
    });
  } 
  return (
    <Container id='layout' className='px-0' fluid>
      {children}
    </Container>
  )
}

export default Layout
