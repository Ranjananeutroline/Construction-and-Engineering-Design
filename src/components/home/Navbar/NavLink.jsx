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
                  height: "50px",
                  width: "110px",
                  paddingLeft: "40px",
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
          <NavLinkProps link="/about" name="About" />
          <NavLinkProps link="/service" name="Service" />
          <NavLinkProps link="/works" name="Works" />
          <NavLinkProps link="/contactus" name="Contact us" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavLink;
