import React from "react";
import "./ourServices.css";
import OurServicesProps from "./OurServicesProps";

function OurServices() {
  return (
    <>
      <div>
        <h3
          style={{
            textAlign: "center",
            fontweight: "bolder",
            fontFamily: "arial",
          }}
        >
          Our Services
        </h3>
        <p style={{ textAlign: "center" }}>
          It's how we follow through the customer!!
        </p>
        <br />
        <div
          className="slideshow-container-xxl p-5 carousel slide"  id="carouselExampleSlidesOnly" data-bs-ride="carousel"
          style={{ backgroundColor: "rgb(231, 243, 247)" }}
        >
          <div className="mySlides active">
            <div className="row justify-content-around responsive">
              <div className="col-md-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service1.jpg"
                    alt="carousel of nice place"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 1</h5>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service2.jpg"
                    alt="Card of the person"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 2</h5>
                    <p
                      style={{
                        textAlign: "center ,justify",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service3.jpg"
                    alt="Card people of the name"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 3</h5>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mySlides">
            <div className="row justify-content-around responsive">
              <div className="col-md-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service4.jpg"
                    alt="Card"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 4</h5>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service5.jpg"
                    alt="Card"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 5</h5>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card p-2"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service6.jpg"
                    alt="Card"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 6</h5>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* The dots/circles */}
          <div style={{ textAlign: "center" }}>
            <span className="dot" onClick="currentSlide(1)"></span>
            <span className="dot" onClick="currentSlide(2)"></span>
          </div>
          {/* our services button  */}
          <div className="button p-1" style={{ textAlign: "center" }}>
            <input
              type="button"
              name="btn"
              value="See more"
              id="read"
              className="btn btn-outline-secondary btn-sm"
            />
          </div>
        </div>
      </div>

      {/* our works starts here */}
<OurServicesProps />
      
    </>
  );
}

export default OurServices;
