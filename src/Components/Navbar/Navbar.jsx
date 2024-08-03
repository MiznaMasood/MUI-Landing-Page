import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './Navbar.module.css'; 


const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className={style.navbar}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="/src/assets/logo.png"  alt="logo" className={style['navbar-logo']}  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={style['navbar-link']}>| Home</Nav.Link>
            <Nav.Link href="#about" className={style['navbar-link']}>About us</Nav.Link>
            <NavDropdown title="Training" id="basic-nav-dropdown" className={style['navbar-link']}>
              <NavDropdown.Item href="#action/3.1">Web and Mobile Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Flutter Mobile Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Graphic Design And Video Editing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className={style['navbar-link']}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;


