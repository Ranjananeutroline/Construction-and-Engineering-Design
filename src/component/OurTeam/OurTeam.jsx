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
             image="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              name="Pranish"
              testimonial="I love the experience where the team mates are helpful and skillfull"
              position="Developer"
            />
          </div>
          <div className="member2 member">
            <OurTeamProp
            image="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              name="Dibya"
              testimonial="I love the experience where the team mates are helpful and skillfull."
              position="Developer"
            />
          </div>
          <div className="member3 member">
            <OurTeamProp
            image="https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80"
              name="Ranjana"
              testimonial="I love the experience where the team mates are helpful and skillfull"
              position="Developer"
            />
          </div>
          <div className="member4 member">
            <OurTeamProp
            image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
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
