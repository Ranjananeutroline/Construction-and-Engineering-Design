import React from "react";
import "./ourPeople.css";
import OurPeopleProps from "./OurPeopleProps";

function OurPeople() {
  return (
    <>
      <div className="fifth p-4">
        <div className="people">
          <div className="faltus"></div>
          <div className="hr">
            <hr />{" "}
          </div>
          <div className="header ">Our People</div>
          <div className="hr">
            <hr />
          </div>
          <div className="faltu"></div>
        </div>
        <div className="imgPeople">
          <OurPeopleProps
            describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="Dibya"
              position="Frontend developer intern"
              className="imgPeople_1"
          />
          <OurPeopleProps    describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="Kushal"
              position="Frontend developer intern" 
              className="imgPeople_2"
              
              />
          <OurPeopleProps    describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="Ranjana"
              position="Frontend developer intern" 
              className="imgPeople_3"
              
              />
              <OurPeopleProps    describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="Ranjana"
              position="Frontend developer intern" 
              className="imgPeople_3"
              
              />
        </div>
      </div>

    </>
  );
}

export default OurPeople;
