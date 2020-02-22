import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap' 

import Github from '@images/svg/github.svg';
import logo from '@images/logo.png'

const NavBar = () => (
  <Container id='home'>
    <Navbar data-scroll-header fixed='top' collapseOnSelect expand='md' className='px-4 navbar-dark bg-dark'>
      <Nav.Link href='#home' className='text-center'>
        <img
          src={logo}
          height='30'
          className='d-inline-block align-center ml-auto'
          alt='Edward Perez logo'
        />
      </Nav.Link>
      <Navbar.Toggle data-target='#navbarResponsive' aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar' >
        <Nav className='ml-auto align-items-center font-weight-bold text-uppercase' style={{ letterSpacing: '.1rem' }}>
          <Nav.Link className='pr-2' href='#home'>Home</Nav.Link>
          <Nav.Link className='pr-2' href='#project'>Project</Nav.Link>
          <Nav.Link className='pr-2' href='#certificate'>Certificate</Nav.Link>
          <Nav.Link className='pr-2' href='#contact'>Contact</Nav.Link>
          <Nav.Link className='pr-2' href='https://github.com/Edward-Perez' target='_blank'>
            <Github width='30' fill='#DF691A' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse> 
    </Navbar>
  </Container>
)

export default NavBar;