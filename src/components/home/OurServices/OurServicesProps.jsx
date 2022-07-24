import React from "react";

function OurServicesProps() {
  return (
    <>
      {/* our works starts here */}
      <div className="container-md">
        <div
          id="demo"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="1000"
        >
          {/* Indicators/dots  */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>
          {/* our works */}
          {/* The slideshow/carousel  */}
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ backgroundColor: "rgb(231, 243, 247)" }}
            >
              <div className="row p-5">
                <div className="col-sm-5 work-caption">
                  <h5
                    style={{
                      textAlign: "left",
                      fontSize: "30px",
                      paddingBottom: "8px",
                    }}
                  >
                    Our Works
                  </h5>
                  <br />
                  <p
                    style={{
                      textAlign: " left",
                      fontSize: "15px",
                      paddingRight: "20px",
                      fontFamily: "calibri",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "orangered",
                      }}
                    >
                      Lorem ipsum
                    </span>
                    amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                <div className="col-sm-7 p-4">
                  <img
                    src="image/work1 (1).jpg"
                    alt="Chicago"
                    className="d-block"
                    height="400px"
                    width="100%"
                    style={{
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundColor: "rgb(231, 243, 247)" }}
            >
              <div className="row p-5">
                <div className="col-sm-5 work-caption">
                  <h5
                    style={{
                      textAlign: "left",
                      fontSize: "30px",
                      paddingBottom: "8px",
                    }}
                  >
                    Our Works
                  </h5>
                  <br />
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      paddingRight: " 20px",
                      fontFamily: "calibri",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: " 20px",
                        color: "orangered",
                      }}
                    >
                      Lorem ipsum
                    </span>
                    amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                <div className="col-sm-7 p-4">
                  <img
                    src="image/work1 (2).jpg"
                    alt="Chicago"
                    className="d-block"
                    height="400px"
                    width="100%"
                    style={{
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundColor: "rgb(231, 243, 247)" }}
            >
              <div className="row p-5">
                <div className="col-sm-5 work-caption">
                  <h5
                    style={{
                      textAlign: "left",
                      fontSize: "30px",
                      paddingBottom: "8px",
                    }}
                  >
                    Our Works
                  </h5>
                  <br />
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      paddingRight: "20px",
                      fontFamily: "calibri",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "orangered",
                      }}
                    >
                      Lorem ipsum
                    </span>
                    amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                <div className="col-sm-7 p-4">
                  <img
                    src="image/work1 (3).jpg"
                    alt="Chicago"
                    className="d-block"
                    height="400px"
                    width="100%"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left and right controls/icons  */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default OurServicesProps;
