import React from "react";

function OurRecentWorks() {
  return (
    <>
      <div classname="container-sm" style={{ paddingTop: 40 }}>
        <div className="row justify-content-center">
          <div
            classname="col-md-6"
            style={{
              height: 75,
              width: 400,
              textAlign: "center",
              borderBottom: "1px solid orangered",
              paddingTop: 35,
            }}
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
          <div classname="col-md-8 p-2" style={{ textAlign: "center" }}>
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

      <div classname="container-fluid" style={{ textAlign: "center" }}>
        <div className="work-btn">
          <button
            classname="button"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.253)" }}
          >
            Featured
          </button>
        </div>
        <button
          className="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#design"
        >
          <a href="#design">Design With Purpose</a>
        </button>

        <button
          className="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#quality"
        >
          <a href="#quality">High Quality Materials</a>
        </button>

        <button
          className="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#experience"
        >
          <a href="#experience">Years Of Experience</a>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-bottom p-3"
        id="design"
        style={{ height: 580, backgroundColor: "rgb(231, 243, 247)" }}
      >
        <div class="container-fluid p-2">
          <div
            className="offcanvas-header p-1"
            style={{ color: "rgba(255, 68, 0, 0.705)" }}
          >
            <h5>Design With Purpose</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-1" style={{ height: 600 }}>
            <p>
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </p>
            <br />
            <div class="container">
              <div
                className="row p-3"
                style={{
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div class="col-md-4">
                  <div class="row">
                    <div
                      className="col-md-12 p-1 flip-card"
                      style={{ height: 300 }}
                    >
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <img
                            src="image/workpageimg/designimg1.jpg"
                            height="290px"
                            width="100%"
                            style={{ border: "1px solid" }}
                            alt="building"
                          />
                        </div>
                        <div class="flip-card-back p-4">
                          <h5>Name</h5>
                          <p style={{ paddingTop: 4, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-12 p-1 flip-card"
                      style={{ height: 300 }}
                    >
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <img
                            src="image/workpageimg/designimg2.jpg"
                            height="290px"
                            width="100%"
                            style={{ border: "1px solid" }}
                            alt="building"
                          />
                        </div>
                        <div class="flip-card-back p-4">
                          <h5>Name</h5>
                          <p style={{ paddingTop: 4, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1 flip-card" style={{ height: 600 }}>
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src="image/workpageimg/designimg3.jpg"
                        height="590px"
                        width="100%"
                        style={{ border: "1px solid" }}
                        alt="building"
                      />
                    </div>
                    <div class="flip-card-back p-4">
                      <h5>Name</h5>
                      <p style={{ paddingTop: 4, fontSize: 14 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <div
                      className="col-md-12 p-1 flip-card"
                      style={{ height: 300 }}
                    >
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <img
                            src="image/workpageimg/designimg4.jpg"
                            height="290px"
                            width="100%"
                            style={{ border: "1px solid" }}
                            alt="building"
                          />
                        </div>
                        <div class="flip-card-back p-4">
                          <h5>Name</h5>
                          <p style={{ paddingTop: 4, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-12 p-1 flip-card"
                      style={{ height: 300 }}
                    >
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <img
                            src="image/workpageimg/designimg5.jpg"
                            height="290px"
                            width="100%"
                            style={{ border: "1px solid" }}
                            alt="building"
                          />
                        </div>
                        <div class="flip-card-back p-4">
                          <h5>Name</h5>
                          <p style={{ paddingTop: 4, fontSize: 14 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row p-3"
                style={{
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div className="col-md-4 p-1 flip-card" style={{ height: 300 }}>
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src="image/workpageimg/designimg8.jpg"
                        height="290px"
                        width="100%"
                        style={{ border: "1px solid" }}
                        alt="building"
                      />
                    </div>
                    <div class="flip-card-back p-4">
                      <h5>Name</h5>
                      <p style={{ paddingTop: 4, fontSize: 14 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1 flip-card" style={{ height: 300 }}>
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src="image/workpageimg/designimg7.jpg"
                        height="290px"
                        width="100%"
                        style={{ border: "1px solid" }}
                        alt=" building"
                      />
                    </div>
                    <div class="flip-card-back p-4">
                      <h5>Name</h5>
                      <p style={{ paddingTop: 4, fontSize: 14 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1 flip-card" style={{ height: 300 }}>
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src="image/workpageimg/designimg6.jpg"
                        height="290px"
                        width="100%"
                        style={{ border: "1px solid" }}
                        alt="building"
                      />
                    </div>
                    <div class="flip-card-back p-4">
                      <h5>Name</h5>
                      <p style={{ paddingTop: 4, fontSize: 14 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurRecentWorks;
