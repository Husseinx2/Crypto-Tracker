import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/Images/Logo.png";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="Navbar-Brand" href="/">
          {" "}
          <img src={Logo} className="Navbar-logo" alt="" />
        </Navbar.Brand>
        <Navbar.Brand className="Navbar-Brand" href="/">
          {" "}
          <bdo className="white">"Crypto</bdo> Tracker"
        </Navbar.Brand>
        <Navbar.Toggle className="NAV" aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas  className="NAV"  >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="">Crypto Tracker</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="ms-auto">
              <Nav.Link href="/" className="NavLink">
                {" "}
                <i className="fa fa-home fa-lg"></i> Home{" "}
              </Nav.Link>
              <Nav.Link href="/#featured" className="NavLink">
                {" "}
                <i className="fa fa-star fa-lg"></i> Featured{" "}
              </Nav.Link>
              <Nav.Link href="/#about" className="NavLink">
                {" "}
                <i className="fa fa-info-circle fa-lg"></i> About{" "}
              </Nav.Link>
             
              <Nav.Link href="/#Halal" className="NavLink">
                {" "}
                <i className="fa fa-file-text-o fa-lg"></i> Halal{" "}
              </Nav.Link>
              <Nav.Item> </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
