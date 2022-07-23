import React from "react";
import { Link } from "react-router-dom";

function NavbarProps({link,name}) {
  return (
    <>
      <li className="nav-item" style={{ paddingRight: "40px" }}>
        <a className="nav-link active" style={{ fontSize: "18px" }} href="/">
          <Link to={link}>{name}</Link>
        </a>
      </li>
    </>
  );
}

export default NavbarProps;
