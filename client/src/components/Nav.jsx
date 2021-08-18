import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const AppNav = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
      <Container>
      <Navbar.Brand href="#home">Christian Stutzman</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav;