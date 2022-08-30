import React from "react";
import "./aboutus.css";
function AboutUs() {
  return (
    <>
      <div className="bg-white aboutus_container">
        {" "}
        <div className="container-sm reverse aboutus">
          <div className="row">
            <div className="col-sm-6">
              <h2
                style={{
                  paddingLeft: "20px",
                  paddingTop: ".5rem",
                }}
              >
                About Us
              </h2>
              <p className="aboutus_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
            </div>
            <div className="col-sm-6 p-4" style={{ paddingLeft: "10px" }}>
              <img
                className="img-fluid img-thumbnail aboutus_img"
                src="image/about1.jpg"
                alt="ceo"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
