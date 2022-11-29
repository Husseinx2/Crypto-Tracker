import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col className="col-sm">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="link">
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Featured{" "}
                </Link>
              </li>
            </ul>
          </Col>
          <Col  className="text-center col-sm">
            <h5> Socials</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/abdulrahmancodes"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-github"
              href="https://github.com/Abdulrahman48811/Crypto-Tracker"
            >
              <i className="fa fa-github" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://linkedin.com/in/abdulrahman-mohammed-b48456230"
            >
              <i className="fa fa-linkedin" />
            </a>
          </Col>

          <Col xs="6" sm="4" className="text-center col-sm">
             <h5>Developers</h5>
             <ul className="list-unstyled">
               <li> 
               <Link to="/" className="link">
                  Api{" "}
                </Link>
               </li>
           
             </ul>


          </Col>
          <Col xs="6" sm="3" className="text-center col-sm">
             <h5>Contact Us</h5>
           
          </Col>
         

        </Row>
      </Container>
    </footer>
  );
}
