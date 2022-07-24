import React from "react";
import {Carousel, Col, Row } from "react-bootstrap";

import "./ourTeam.css";
import OurTeamProps from "./OurTeamProps";
function OurTeam() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Team</h1>
      <p style={{ textlign: "center" }}>"Success is best when it's shared"</p>
      <br />
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "rgb(231, 243, 247)", padding: "100px" }}
      >
        {/* <div className="container-sm" 
            style={{backgroundColor:"white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
            <div className="owl-carousel owl-theme">
              <div className='row'>
              <OurTeamProps />
              <OurTeamProps />
              <OurTeamProps />
              <OurTeamProps />
              <OurTeamProps />
              <OurTeamProps />
              </div>
            </div>
        </div> */}

        <div className="container">
          <Carousel>
            <Carousel.Item>
              <Row >
                <Col sm={4}>
                  <OurTeamProps />
                </Col>
                <Col sm={4}>
                  <OurTeamProps />
                </Col>
                <Col sm={4}>
                  <OurTeamProps />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Row>
                <Col sm={4}>
                  <OurTeamProps />
                </Col>
                <Col sm={4}>
                  <OurTeamProps />
                </Col>
                <Col sm={4}>
                  <OurTeamProps />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default OurTeam;
