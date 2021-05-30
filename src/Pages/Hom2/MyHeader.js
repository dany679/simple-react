import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink as NavLinkBot } from 'react-bootstrap';
import './Myhomer2.css';

const Myhomer2 = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='http://localhost:3000'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLinkBot>
              <NavLink end to='/'>
                Home
              </NavLink>
            </NavLinkBot>
            <NavLinkBot>
              <NavLink activeClassName='active' to='/forms'>
                Forms
              </NavLink>
            </NavLinkBot>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Myhomer2;
