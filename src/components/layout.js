import React, { useLayoutEffect } from "react"
import 'bootswatch/dist/superhero/bootstrap.min.css'

const Layout = ({ children }) => {
  // Smooth Scroll effect apply to anchors after DOM manipulation
  useLayoutEffect(() => {
    require('smooth-scroll')('a[href*="#"]', {
      header: '[data-scroll-header]'
    })
  },[])

  return (
    <div id='layout' className='container-fluid px-0'>
      {children}
    </div>
  )
}

export default Layout