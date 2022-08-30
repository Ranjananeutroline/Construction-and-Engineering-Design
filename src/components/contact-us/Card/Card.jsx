import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Card({ icon, heading, desc, desc_opt, link }) {
  return (
    <>
      <div className="contactus_card">
        <div className="top">
          <i className="icons">{icon}</i>
          <p className="card-heading">{heading}</p>
          <p className="desc_opt">{desc}</p>
          <p className="desc_opt">{desc_opt}</p>
        </div>
        <a
          href={link}
          className="bottom"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>more</p>
          <i>
            <AiOutlineArrowRight />
          </i>
        </a>
      </div>
    </>
  );
}

export default Card;
