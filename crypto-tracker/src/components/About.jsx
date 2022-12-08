import React from "react";
import hussein from "../Assets/Images/Hussein.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Abdulrahman from "../Assets/Images/abdulrahman.JPG";
export default function About() {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <img src={Abdulrahman} alt="Avatar" className="abdo-image" />
          <h2>Abdulrahman</h2>
          <p1>
            City: San Diego, california <br /> <br />
            Full Stack web/Mobile developer <br /> <br />
            Socials: <br />
            <a
              href="http://instagram.com/abdulrahmancodes"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon"></FaInstagram>Instagram
            </a>
            <br></br>
            <a
              href="http://linkedin.com/in/abdulrahman-mohammed-b48456230"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon"></FaLinkedin>Linkedin
            </a>
            <br></br>
            <a
              href="https://github.com/Abdulrahman48811"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon"></FaGithub>Github
            </a>
            <br></br>
          </p1>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <img src={hussein} alt="avatar" />
          <h2>Hussein</h2>
          <p1>
            City: Columbus, Ohio <br /> <br />
            Front-end web/Mobile developer <br /> <br />
            Socials: <br />
            <a
              href="http://instagram.com/hussein_597"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon"></FaInstagram>Instagram
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/hussein-hussein-99a8221ba/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon"></FaLinkedin>Linkedin
            </a>
            <br></br>
            <a
              href="https://github.com/husseinx2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon"></FaGithub>Github
            </a>
            <br></br>
          </p1>
        </div>
      </div>
    </div>
  );
}
