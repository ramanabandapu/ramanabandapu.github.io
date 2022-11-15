import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  redirect  from "react-router-dom";
import "./Navbar2.css";
import resume from "../assets/Ramana_Bandapu_Resume.pdf"
export default function Navbar2() {

const navigate = useNavigate();


  return (
    <nav className="navbar2 navbar-expand-lg navbar-light ">
      <div className="container">
        {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav " id="navbar-list">
            <li className="nav-item active">
              <a className="nav-link" href="#profile">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#techStack">
                Technical Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
            <li className="nav-item">
			<a target={"_blank"} href={resume} download>
                  <button className="btn highlighted-btn" onClick={() => {window.open(resume)}}>Get Resume</button>
                 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
