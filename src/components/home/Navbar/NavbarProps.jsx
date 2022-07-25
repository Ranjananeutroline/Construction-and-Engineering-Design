import React from "react";
import { Link } from "react-router-dom";

function NavbarProps({ link, name }) {
  return (
    <>
      <li className="nav-item" style={{ paddingRight: "40px" }}>
        <Link
          className="nav-link active"
          style={{ fontSize: "18px" }}
          to={link}
        >
          {name}
        </Link>
      </li>
    </>
  );
}

export default NavbarProps;
