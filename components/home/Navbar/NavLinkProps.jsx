import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./navbar.css";
// import "./nav.css";

function NavLinkProps({link,name}) {
  return (
    <div ClassName='nname'>
       <LinkContainer  to={link} style={{ paddingRight: "40px" }}>
            <Nav.Link >{name}</Nav.Link>
          </LinkContainer>{" "}
    </div>
  )
}

export default NavLinkProps