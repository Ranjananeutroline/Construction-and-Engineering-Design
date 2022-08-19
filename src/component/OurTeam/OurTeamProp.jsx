import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import './ourTeam.css'
// import { IconContext } from "react-icons";
function OurTeamProp({ name, testimonial, position,image }) {
  return (
    <>
      <img className="paxi" src={image} alt="" />
      
      <div className="teamkoName">
        <h4 className=" mt-1">{name}</h4>
        <p>{testimonial}</p>
      </div>
      <div className="teamProps">
        <h5 >{position}</h5>

        {/* <IconContext.Provider value={{ className: "our_teams_icons" }}> */}
          <div className="icons mb-1">
            <img className="dibbyas" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" />
            <img className="dibinsta" src="./images/insta.png" />
            <img className="dibinsta" src="./images/linked.png" />
            <FaTwitter className="dibinsta" style={{color:"#00ACEE"}} />
          </div>
        {/* </IconContext.Provider> */}
      </div>
    </>
  );
}

export default OurTeamProp;
