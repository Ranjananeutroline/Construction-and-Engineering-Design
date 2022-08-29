import React from "react";
import "../../home/Carousel/Carousel.css";

function OurPeopleCarousel() {
  return (
    <>
      <div
        id="demo"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-interval="1000"
        // style={{ paddingTop: "5rem" }}
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
        <div className="container-xxl carousel-container">
          <div className="carousel-inner">
            <div className="carousel-item active carouselimg-bg">
              <img
              className="img-height"
                src="/images/sliderbg7.jpg"
                alt="bgbites"
              height="400px"
               width="100%"
                style={{objectFit:"cover"}}
              />
              <div className="carousel-caption">
                <h1 style={{ fontSize: "35px" }}>Company</h1>
                <p style={{ display: "block" ,color:"white" }}>
                  <span style={{ display: "block" }}>
                  We build custom IT solutions customer’s  {" "}
                  </span>
                  simplify process and increase  revenue.
                </p>
              </div>
            </div>
            <div className="carousel-item carouselimg-bg">
              <img
              className="img-height"
                src="/images/sliderbg5.jpg"
                alt="bgbites1"
              height="400px"
               width="100%"
              />
              <div className="carousel-caption">
                <h1 style={{ fontSize: "35px" }}>Our People</h1>
                <p style={{ display: "block" ,color:"white" }}>
                  <span style={{ display: "block" ,color:"white" }}>
                  We are young, innovative,skilled,{" "}
                  </span>
                  and trusted group  providing IT solutions.
                </p>
              </div>
            </div>
            <div className="carousel-item carouselimg-bg">
              <img
              className="img-height"
                src="/images/sliderbg6.jpg"
                alt="bgbites2"
              height="400px"
               width="100%"
              />
              <div className="carousel-caption">
                <h1 style={{ fontSize: "35px" }}>Team Members</h1>
                <p style={{ display: "block" ,color:"white" }}>
                  <span style={{ display: "block" }}>
                  Amazing team members,Self motivated {" "}
                  </span>
                  welcomes new & innovative ideas.
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

export default OurPeopleCarousel;