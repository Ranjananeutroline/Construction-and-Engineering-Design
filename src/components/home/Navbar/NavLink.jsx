import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavLinkProps from "./NavLinkProps";

const NavLink = () => {
  return (
    <Navbar bg="light" expand="sm" className="navbar_link">
      <LinkContainer to="/">
        <Navbar.Brand>
          {" "}
          <a className="navbar-brand" href="/#">
            <div>
              <img
                src="\image/logo.jpeg"
                style={{
                  height: "60px",
                  width: "120px",
                  paddingLeft: "40px",
                  paddingTop:"20px"
                }}
                alt="logo of a company"
              />
            </div>
          </a>
        </Navbar.Brand>
      </LinkContainer >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto navbar-nav">
          <NavLinkProps link="/" name="Home" />
          <NavLinkProps link="/about" name="About Us" />
          <NavLinkProps link="/service" name="Our Service" />
          <NavLinkProps link="/works" name=" Our Works" />
          <NavLinkProps link="/contactus" name="Contact Us" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavLink;
