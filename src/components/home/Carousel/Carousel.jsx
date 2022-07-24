import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="demo"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-interval="1000"
        style={{ paddingTop: "5rem" }}
      >
        {/* Indicators/dots */}
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

        {/* The slideshow/carousel */}
        <div className="container-xxl">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="image/bgimg1.jpg"
                alt="bgbites"
                height="500px"
                width="100%"
              />
              <div className="carousel-caption">
                <h1 style={{ fontSize: "35px" }}>WE BUILD WITH PASSION</h1>
                <p>
                  <span style={{ display: "block" }}>
                    Manufacturing Solutions Better way of Production{" "}
                  </span>
                  Making your vision become a reality.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="image/bgimg3.jpg"
                alt="bgbites1"
                height="500px"
                width="100%"
              />
              <div className="carousel-caption">
                <h1 style={{ fontSize: "35px" }}>WE BUILD WITH PASSION</h1>
                <p>
                  <span style={{ display: "block" }}>
                    Manufacturing Solutions Better way of Production{" "}
                  </span>
                  Making your vision become a reality.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="image/bgimg2.jpg"
                alt="bgbites2"
                height="500px"
                width="100%"
              />
              <div className="carousel-caption">
                <h1 style={{ fontSize: "35px" }}>WE BUILD WITH PASSION</h1>
                <p>
                  <span style={{ display: "block" }}>
                    Manufacturing Solutions Better way of Production{" "}
                  </span>
                  Making your vision become a reality.
                </p>
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

export default Carousel;
