import React from "react";
// import { NavLink } from "react-bootstrap";
import { Link, NavLink  } from "react-router-dom";

function NavbarProps({ link, name }) {
  return (
    <>
      <li className="nav-item" style={{ paddingRight: "40px" }}>
        <NavLink
         style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
            fontSize:"18px",
          };
        }}
          className="nav-link active"
          // style={{ fontSize: "18px" }}
          to={link}
        >
          {name}
        </NavLink>
      </li>
    </>
  );
}

export default NavbarProps;
