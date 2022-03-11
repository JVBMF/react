import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    
 return(

    <Navbar bg="light" expand="lg">
    <Container>
      <NavLink to="/">React-Bootstrap</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/lista">Lista</NavLink>
          <NavLink to="/categoria/gorra">Gorra</NavLink>
          <NavLink to="/categoria/remera">Remera</NavLink> {/* Como es de la forma categoria/:categoriaId su Id es remera */}
          <NavLink to="/detalle">Detalle</NavLink>
          <NavLink to="/cart">Carrito</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 )
}

export { NavBar }