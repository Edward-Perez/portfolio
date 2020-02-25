import React, { useState } from 'react'
 
import Github from '../data/images/svg/github.svg';
import logo from '../data/images/logo.png'

const NavBar = () => {
  const [collapse, setCollapse] = useState(true);

  const toggle = (event = false) => {
    if(event) event.preventDefault();
    return setCollapse(!collapse);
  }

  const shouldToggle = (e) => {
    if(collapse === false) return toggle()
    return;
  }

  return (
    <div className='container' id='home'>
      <nav data-scroll-header className='navbar navbar-expand-md navbar-dark fixed-top bg-dark px-4'>
        <a href='#home' className='nav-link text-center'>
          <img src={logo} height='30' width='130' className='d-inline-block align-center ml-auto'alt='Edward Perez logo'/>
        </a>
        <button onClick={toggle} className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='responsive-navbar' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`navbar-collapse ${collapse ? 'collapse' : ''}`} id='responsive-navbar'>
          <ul className='navbar-nav ml-auto align-items-center font-weight-bold text-uppercase' style={{ letterSpacing: '.1rem' }}>
          <li className='nav-item'>
            <a onClick={shouldToggle} href='#home'
              className='nav-link pr-2'>Home</a>
          </li>
          <li className='nav-item'>
            <a onClick={shouldToggle} href='#project'
             className='nav-link pr-2'>Project</a>
          </li>
          <li className='nav-item'>
            <a onClick={shouldToggle} href='#certificate' 
              className='nav-link pr-2'>Certificate</a>
          </li>
          <li className='nav-item'>
            <a onClick={shouldToggle} href='#contact'
              className='nav-link pr-2'>Contact</a>
          </li>
          <li className='nav-item'>
            <a href='https://github.com/Edward-Perez' className='nav-link pr-2'>
              <Github width='30' fill='#DF691A' />
            </a>
          </li>
          </ul>
        </div> 
      </nav>
    </div>
  )
}

export default NavBar;