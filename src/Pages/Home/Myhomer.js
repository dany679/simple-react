import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

const Myhomer = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='http://localhost:3000'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='http://localhost:3000/forms/'>Formularios</Nav.Link>
            <Nav.Link href='http://localhost:3000/'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
};

export default Myhomer;
