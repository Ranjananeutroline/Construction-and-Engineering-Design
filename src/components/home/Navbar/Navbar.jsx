import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";
import NavbarProps from "./NavbarProps";
function Navbar() {
  return (
    <>
      <div>
        {" "}
        <nav className="navbar navbar-expand-sm bg-white navbar-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <div>
                <img
                  src="\image/logo.jpeg"
                  style={{
                    height: "50px",
                    width: "110px",
                    paddingLeft: "40px",
                  }}
                  alt="logo of a company"
                />
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center p-3"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
             <NavbarProps link="/"  name="Home"/>
             <NavbarProps link="/"  name="About"/>
             <NavbarProps link="/"  name="Services"/>
             <NavbarProps link="/works"  name="Works"/>
             <NavbarProps link="/contactus"  name="Contact Us"/>
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
