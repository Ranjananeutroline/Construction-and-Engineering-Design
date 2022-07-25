// import { Carousel } from "bootstrap";
import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import OurClientProps from "./OurClientProps";
import "./ourClient.css";
function OurClients() {
  return (
    <>
      <div className="container-md ourClient_container ">
        <h2
          style={{ textAlign: "center", textTransform: "uppercase" }}
          className="client_heading"
        >
          Our Clients
        </h2>
        <Carousel>
          <Carousel.Item>
            <Row className="client-section p-2 m-auto ">
              <Col sm={4}>
                <OurClientProps />
              </Col>
              <Col sm={4}>
                <OurClientProps />
              </Col>
              <Col sm={4}>
                <OurClientProps />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Row className="client-section p-2">
              <Col sm={4}>
                <OurClientProps />
              </Col>
              <Col sm={4}>
                <OurClientProps />
              </Col>
              <Col sm={4}>
                <OurClientProps />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default OurClients;
