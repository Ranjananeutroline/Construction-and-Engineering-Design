import React from "react";
import {Carousel, Col, Row } from "react-bootstrap";

import "./ourTeam.css";
import OurTeamProps from "./OurTeamProps";
function OurTeam() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Team</h1>
      <p style={{ textAlign: "center",paddingBottom:"1rem" }}>"Success is best when it's shared"</p>
      <div
        className="container-fluid team_whole_container"
        style={{ backgroundColor: "rgb(231, 243, 247)" }}
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

        <div className="container" >
          <Carousel className="ourTeam_container">
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
