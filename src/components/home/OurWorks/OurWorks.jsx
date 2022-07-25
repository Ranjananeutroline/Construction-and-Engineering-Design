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
              <OurWorkProps image="image/work1 (1).jpg"/>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Row>
            <Col >
              <OurWorkProps image="image/work1 (2).jpg"/>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Row>
            <Col >
              <OurWorkProps image="image/work1 (3).jpg"/>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default OurWorks;
