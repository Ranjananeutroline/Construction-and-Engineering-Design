import React from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../image/banner1.jpg";
export const Banner = () => {
  return (
    <>
      <div className="bg-whiter">
        {" "}
        <div className="banner">
          <div className="row service_banner">
            <hr className="line" style={{ width: "100%", zIndex: "1" }} />

            <div className="col-sm-6">
              <img
                className="img-fluid"
                src={banner1}
                alt="Service_Image"
                width="500px"
                // height="500px"
              />
            </div>
            <div className="col-sm-6 service_banner_text">
              <h2
                className="Dis"
                style={{
              
                  fontfamily: "slick",
                }}
              >
                Best It Service Provider & <br /> Engineering Consulting Firm
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

