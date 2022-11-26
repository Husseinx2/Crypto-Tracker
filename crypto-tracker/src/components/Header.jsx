import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/Images/Logo.png';


export default function Header() {
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="Navbar-Brand" href="/"> <img src={Logo} className="Navbar-logo" alt="" /></Navbar.Brand>
        <Navbar.Brand className="Navbar-Brand" href="/"> <bdo className="white">"Crypto</bdo> Tracker"</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="/" className="NavLink" > <i className="fa fa-home fa-lg"></i> Home </Nav.Link>
            <Nav.Link href="/" className="NavLink" > <i className="fa fa-info fa-lg"></i> About Us </Nav.Link>
            <Nav.Link href="/" className="NavLink"> <i className="fa fa-star fa-lg" ></i> Featured</Nav.Link>
            <Nav.Item>    </Nav.Item>

          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>


  );
}
