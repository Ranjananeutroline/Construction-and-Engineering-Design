import React from "react";
import {Carousel, Col, Row } from "react-bootstrap";

import "./ourTeam.css";
import OurTeamProps from "./OurTeamProps";
function OurTeam() {
  return (
    <>
     
      <div
        className="container-fluid team_whole_container">

           <h2 style={{ textAlign: "center",marginBottom:"0px",}}>Our Team</h2>
      <p style={{ textAlign: "center"}}>"Success is best when it's shared"</p>
      
        <div className="ourteam" >
          <Carousel className="ourTeam_container">
            <Carousel.Item>
              <Row >
                <Col sm={4}>
                  <OurTeamProps image="image/team1.jpg" heading="Management"/>
                  {/* "image/team1.jpg" */}
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team2.jpg" heading="Human Resource"/>
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team3.jpg" heading="Developer"/>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <Row>
                <Col sm={4}>
                  <OurTeamProps image="image/team3.jpg" heading="Marketing"/>
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team2.jpg" heading="Designers"/>
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team1.jpg" heading="Testing&Debugging"/>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
