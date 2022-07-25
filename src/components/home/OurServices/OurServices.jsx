import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./ourServices.css";
import OurServicesProps from "./OurServicesProps";
import PropsServices from "./PropsServices";

function OurServices() {
  return (
    <>
      <div>
        <h3
          style={{
            textAlign: "center",
            fontweight: "bolder",
            fontFamily: "arial",
            fontWeight:"600",
          }}
        >
          Our Services
        </h3>
        <p style={{ textAlign: "center" }}>
          It's how we follow through the customer!!
        </p>
        <br />
        <div
          className="slideshow-container-xxl p-5 carousel slide"
          id="carouselExampleSlidesOnly"
          data-bs-ride="carousel"
          style={{ backgroundColor: "rgb(231, 243, 247)" }}
        >
          <Carousel>
            <Carousel.Item>
              <Row className="justify-content-around">
                <Col sm={3}>
                  <PropsServices />
                </Col>
                <Col sm={3}>
                  <PropsServices />
                </Col>
                <Col sm={3}>
                  <PropsServices />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Row className="justify-content-around">
                <Col sm={3}>
                  <PropsServices />
                </Col>
                <Col sm={3}>
                  <PropsServices />
                </Col>
                <Col sm={3}>
                  <PropsServices />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>

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
      {/* <OurServicesProps /> */}
    </>
  );
}

export default OurServices;
