import React from "react";
import "./ourPeople.css"

function OurPeople() {
  return (
    <>
      <div className="fifth">
        <div className="people">
          <div className="faltus"></div>
          <div className="hr">
            <hr />{" "}
          </div>
          <div className="header">Our People</div>
          <div className="hr">
            <hr />
          </div>
          <div className="faltu"></div>
        </div>
        <div className="imgPeople mt-5">
          <div className="image1">
            <img src="/images/man.jpg" alt="" className="avtar" />
            <div class="overlay">
              <div class="text">
                {" "}
                <p className="company">
                  "At this Company, I have the opportunity to learn from great
                  minds, do great work for our clients, and have fun while doing
                  it."
                </p>{" "}
              </div>
              <p
                style={{
                  marginTop: "100%",
                  marginLeft: "50px",
                  color: "black",
                }}
              >
                Dibbya,FrontEnd Intern
              </p>
            </div>
          </div>
          <div className="image2">
            <img src="/images/man.jpg" alt="" className="avtar" />
          </div>
          <div className="image3">
            <img src="/images/man.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPeople;
