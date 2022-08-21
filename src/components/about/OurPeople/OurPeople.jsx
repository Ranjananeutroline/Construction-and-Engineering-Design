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
          <h2 style={{paddingTop:'8px', paddingBottom:'8px', margin:"0 1rem"}}>Our People</h2>
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
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <OurPeopleProps    describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="Pranish"
              position="Frontend developer intern" 
              className="imgPeople_2"
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              
              />
          <OurPeopleProps    describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="Ranjana"
              position="Frontend developer intern" 
              className="imgPeople_3"
              image="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZhY2UlMjBnaXJsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              />
              <OurPeopleProps    describe="At this Company, I have the opportunity to learn from great
              minds, do great work for our clients, and have fun while doing
              it."
              name="kushal"
              position="Frontend developer intern" 
              className="imgPeople_3"
              image="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2UlMjBndXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              />
        </div>
      </div>

    </>
  );
}

export default OurPeople;
