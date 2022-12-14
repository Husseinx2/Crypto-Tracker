import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
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
                  <a href="/#featured" className="link">
                    Featured{" "}
                  </a>
                </li>
                <li>
                  <a href="/#about" className="link">
                    About{" "}
                  </a>
                </li>
                <li>
                  <a href="/#Halal" className="link">
                    Halal{" "}
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="text-center col-sm">
              <h5>Socials</h5>
              <a
                href="http://linkedin.com/in/abdulrahman-mohammed-b48456230"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <br></br>
              <a
                href="https://www.linkedin.com/in/hussein-hussein-99a8221ba/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <br></br>
              <a
                href="https://github.com/Abdulrahman48811/Crypto-Tracker"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <br></br>
              <a
                href="http://instagram.com/abdulrahmancodes"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <br></br>
            </Col>

            <Col className="text-center col-sm">
              <h5>Developers</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.coingecko.com/en/api"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Api{" "}
                  </a>
                  <br />
                </li>
              </ul>
            </Col>
            <Col className="text-center col-sm">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/Profile" className="link">
                    <a className="clickme" href="/">
                      More Info
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
