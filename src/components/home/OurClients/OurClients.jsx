// import { Carousel } from "bootstrap";
import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./ourClient.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OurClients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    // slidesToScroll:2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <h2 className="head"> Our Clients</h2>
        <div className="move">
          <Slider {...settings}>
            <div>
              <img className="Picture" loading="lazy" src="image/logo1.jpg" alt="logo" />
            </div>
            {/* <div >
          <img className="Picture" src="image/logo5.jpg" alt="logo"/>
          </div> */}
            <div>
              <img className="Picture" loading="lazy" src="image/logo6.jpg" alt="logo" />
            </div>
            <div>
              <img className="Picture" loading="lazy" src="image/logo2.jpg" alt="logo" />
            </div>
            <div>
              <img className="Picture" loading="lazy" src="image/logo3.jpg" alt="logo" />
            </div>
            <div>
              <img className="Picture" loading="lazy" src="image/logo4.jpg" alt="logo" />
            </div>
            {/* <div>
          <img className="Picture"src="image/logo5.jpg" alt="logo"/>
          </div> */}
            <div>
              <img className="Picture" loading="lazy" src="image/logo6.jpg" alt="logo" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default OurClients;
