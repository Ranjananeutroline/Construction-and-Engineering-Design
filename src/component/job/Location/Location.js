import React from "react";
import "./Location.css";

const Location = () => {
  return <>
  <div className="location-photo">
        <div className="location-button flex-col">  {/* this flex-col is coming from components/navbar.css */}
         <button className="our_location_button d-grid mx-auto justify-content-center "> 
         <a href="https://g.page/neutroline?share">Our Location</a>
         </button>
        </div>
        </div>

  </>;
};

export default Location;
