import React from "react";
import "./aboutus.css"
function AboutUs() {
  return (
    <>
      <div className="bg-white aboutus_container">
        {" "}
        <div className="container-sm reverse aboutus">
          <div className="row">
            <div className="col-sm-6">
              <h4 style={{ paddingLeft: "20px", fontSize: "25px" }}>
                About Us
              </h4>
              <p
              className="aboutus_paragraph"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.....
              </p>
              <div className="button">
                <input
                  type="button"
                  name="btn"
                  value="See more"
                  id="read"
                  className="btn btn-outline-secondary btn-sm"
                />
              </div>
            </div>
            <div className="col-sm-6 p-4" style={{ paddingLeft: "10px" }}>
              <img
                className="img-fluid img-thumbnail"
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
