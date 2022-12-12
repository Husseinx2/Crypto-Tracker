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
                <a href="/#featured" className="link">Featured </a>
                </li>
                <li>
                  <a href="/#about" className="link">About </a>
                </li>
                <li>
                <a href="/#Halal" className="link">Halal </a>
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
              {/* <a
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
  </a> */}
            </Col>

            <Col className="text-center col-sm">
              <h5>Developers</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.coingecko.com/en/api" target="_blank" rel="noreferrer">
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
