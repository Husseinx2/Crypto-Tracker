import React from "react";
import hussein from "../Assets/Images/Hussein.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import Abdulrahman from "../Assets/Images/abdulrahman.JPG";

import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="split left">
        <div className="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Profile</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="centered">
          <img src={Abdulrahman} alt="Avatar" className="abdo-image" />
          <h2 className="name">ABDULRAHMAN MOHAMMED</h2>
          <p1>
            <h6>
              Full-Stack Web/Mobile Developer <br />{" "}
            </h6>
            <p>
              <bde className="fa fa-map-marker"> San Diego, California</bde>
              <br />
              <bde className="fa fa-map-marker"> Toronto, Ontario</bde>
              <br />
              <span
                className="hovertext"
                data-hover="Abdulrahman is a Web Developer with more than one year of experience, who graduated from the Lighthouse Labs Coding Bootcamp"
              >
                About Abdulrahman
              </span>
            </p>

            {/* Socials: <br /> */}
            <div className="socialfor">
              <SocialIcon
                target="_blank"
                url="https://abdulrahmanmohd.vercel.app/"
                bgColor="#835C3B"
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                target="_blank"
                url="https://www.linkedin.com/in/abdulrahman-mohammed-b48456230/"
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                target="_blank"
                url="https://github.com/Abdulrahman48811"
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                target="_blank"
                url="https://www.instagram.com/abdulrahmancodes/"
                bgColor="#d92e7f"
                style={{ height: 45, width: 45 }}
              />
            </div><br/><br/>
           <h6>Contact Me</h6>
            <a href="mailto:abdulrahman48811@gmail.com?subject = Feedback&body = Message">
            <i className="fa fa-envelope fa-lg" /> {" "}
            </a>
            
          </p1>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <img src={hussein} classname="avatar" alt="avatar" />
          <h2>
            Hussein <span className="last-name">Hussein</span>
          </h2>
          <span className="title">Front-end web/Mobile developer</span> <br />{" "}
          <br />
          <p1>
            <bde className="fa fa-map-marker location"> Columbus, Ohio</bde>
            <br />

            <div className="Hussein-social">
              <a
                href="http://instagram.com/hussein_597"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  className="icon"
                  style={{ height: 50, width: 30 }}
                ></FaInstagram>
              </a>
              <br></br>
              <a
                href="https://www.linkedin.com/in/hussein-hussein-99a8221ba/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  className="icon"
                  style={{ height: 50, width: 30 }}
                ></FaLinkedin>
              </a>
              <br></br>
              <a
                href="https://github.com/husseinx2"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  className="icon"
                  style={{ height: 50, width: 30 }}
                ></FaGithub>
              </a>
            </div>

            <p1 className="hidden">
              {" "}
              <br />
              My name's Hussein <span className="last-name">Hussein</span>, I'm
              a 20 year old front-end developer.
              <br /> <br />
              <i className="fa fa-envelope"></i> :Husseinwkc@gmail.com
              <br />
              <i className="fa fa-phone"></i>: +1-678-602-2522
            </p1>
            <br></br>
          </p1>
        </div>
      </div>
    </div>
  );
}
