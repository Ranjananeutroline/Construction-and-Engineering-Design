import { Collapse } from "bootstrap";
import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import OurWorkProps from "./OurWorkProps";
// import OurWorksProps from "OurWorksProps";
import "./ourWorks.css"
function OurWorks() {
  return (
    <>
    <div className="ourWorks_container">
      <Carousel className="work_carousel">
        <Carousel.Item>
          <Row className="justify-content-around">
            <Col >
              <OurWorkProps />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Row>
            <Col >
              <OurWorkProps />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Row>
            <Col >
              <OurWorkProps />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default OurWorks;
