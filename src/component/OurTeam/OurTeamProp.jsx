import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
// import { IconContext } from "react-icons";
function OurTeamProp({ name, testimonial, position }) {
  return (
    <>
      <img src="/images/man.jpg" alt="" />
      <div>
        <h4>{name}</h4>
        <p>{testimonial}</p>
      </div>
      <div>
        <h5>{position}</h5>

        {/* <IconContext.Provider value={{ className: "our_teams_icons" }}> */}
          <div className="icons">
            <FaFacebook className="db" style={{color:"#5457AC"}} />
            <FaInstagram className="db" style={{ color:"#B43D3D"}} />
            <FaLinkedinIn className="db" style={{color:"#5457AC"}} />
            <FaTwitter className="db" style={{color:"#00ACEE"}} />
          </div>
        {/* </IconContext.Provider> */}
      </div>
    </>
  );
}

export default OurTeamProp;
