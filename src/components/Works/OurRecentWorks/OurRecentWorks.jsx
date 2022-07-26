import React from "react";
import "./ourRecentWorks.css"
import RecentWorkButtonFeatProps from "./RecentWorkButtonFeatProps";

function OurRecentWorks() {
  return (
    <>
      <div className="container p-6 recent_works" style={{ paddingTop: "10rem"}}>
        <div className="row justify-content-center">
          <div
            className="col-md-6 recentwork_hr"
          >
            <h3>
              Let's See{" "}
              <span style={{ color: "rgba(255, 68, 0, 0.705)" }}>
                Our Recent Works!!
              </span>
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 p-2" style={{ textAlign: "center" }}>
            <p style={{ textAlign: "center", fontSize: 15 }}>
              Here are some of our works that acts as evidence of our successful
              status.
              <br />
              We have done lots of works for various business institutions and
              companies.
              <br /> We can proudly say that we as a company are here to build a
              long-run relationship with our clients.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid recent_works" style={{ textAlign: "center", paddingBottom:"3rem" }}>
        <div className="work-btn">
          <button
            className="ourWorks_button"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.253)" }}
          >
            Featured
          </button>
       
        <button
          className="ourWorks_button"
          data-bs-toggle="offcanvas"
          data-bs-target="#design"
        >
          <a href="#design">Design With Purpose</a>
        </button>

        <button
          className="ourWorks_button"
          data-bs-toggle="offcanvas"
          data-bs-target="#quality"
        >
          <a href="#quality">High Quality Materials</a>
        </button>

        <button
          className="ourWorks_button"
          data-bs-toggle="offcanvas"
          data-bs-target="#experience"
        >
          <a href="#experience">Years Of Experience</a>
        </button>
      </div>
      </div>

     <RecentWorkButtonFeatProps id="design" heading="Design with purpose"/>
     <RecentWorkButtonFeatProps id="quality" heading="HIgh Quality Materials"/>
     <RecentWorkButtonFeatProps id="experience" heading="Years of Experience"/>
    </>
  );
}

export default OurRecentWorks;
