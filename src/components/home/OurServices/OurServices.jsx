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
          className="slideshow-container-xxl carousel slide service_top"
          id="carouselExampleSlidesOnly"
          data-bs-ride="carousel"
          style={{ backgroundColor: "rgb(231, 243, 247)" }}
        >
          <Carousel className="service_carousel">
            <Carousel.Item interval={5000}>
              <Row className="justify-content-around">
                <Col sm={4} className="service_col">
                  <PropsServices />
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices />
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Row className="justify-content-around">
                <Col sm={4} className="service_col">
                  <PropsServices />
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices />
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
      
        </div>
      </div>

      {/* our works starts here */}
      {/* <OurServicesProps /> */}
    </>
  );
}

export default OurServices;
