import React from "react";

import "./ourTeam.css";
import OurTeamProp from "./OurTeamProp";
function OurTeam() {
  return (
    <>
      <div className="third">
        <button className=" d-grid m-auto justify-content-center bg-info text-white ">
          <h5>Our Team</h5>
        </button>
        <div className="flexBox">
          <div className="member1 member">
            <OurTeamProp
              name="Pranish"
              testimonial="I love the experience where the team mates are helpful and skillfull"
              position="Developer"
            />
          </div>
          <div className="member2 member">
            <OurTeamProp
              name="Dibya"
              testimonial="I love the experience where the team mates are helpful and skillfull.I love the experience where the team mates are helpful and skillfull."
              position="Developer"
            />
          </div>
          <div className="member3 member">
            <OurTeamProp
              name="Ranjana"
              testimonial="I love the experience where the team mates are helpful and skillfull"
              position="Developer"
            />
          </div>
          <div className="member4 member">
            <OurTeamProp
              name="Kushal"
              testimonial="I love the experience where the team mates are helpful and skillfull"
              position="Developer"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
