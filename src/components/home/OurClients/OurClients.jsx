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
                <OurClientProps image="image/client1.jpeg" heading="Client 1"/>
              </Col>
              <Col sm={4}>
                <OurClientProps image="image/client2.jpg" heading="Client 2"/>
              </Col>
              <Col sm={4}>
                <OurClientProps image="image/client3.jpg" heading="Client 3"/>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Row className="client-section p-2">
              <Col sm={4}>
                <OurClientProps image="image/client4.jpg" heading="Client 4"/>
              </Col>
              <Col sm={4}>
                <OurClientProps image="image/client1.jpeg" heading="Client 5"/>
              </Col>
              <Col sm={4}>
                <OurClientProps image="image/client2.jpg" heading="Client 6"/>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default OurClients;
