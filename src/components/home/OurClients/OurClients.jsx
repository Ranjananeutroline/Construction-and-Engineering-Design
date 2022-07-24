// import { Carousel } from "bootstrap";
import React from "react";
import {Carousel, Col, Row } from "react-bootstrap";
import OurClientProps from "./OurClientProps";

function OurClients() {
  return (
    <>
   <div className='container'>
       <Carousel>
      <Carousel.Item>
      <Row className='client-section p-2'>
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
        <Carousel.Item interval={500}>
        <Row className='client-section p-2'>
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
