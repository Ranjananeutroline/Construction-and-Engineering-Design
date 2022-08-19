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
                  <OurTeamProps image="image/team1.jpg" heading="Team1"/>
                  {/* "image/team1.jpg" */}
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team2.jpg" heading="Team2"/>
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team3.jpg" heading="Team3"/>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <Row>
                <Col sm={4}>
                  <OurTeamProps image="image/team3.jpg" heading="Team4"/>
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team2.jpg" heading="Team5"/>
                </Col>
                <Col sm={4}>
                  <OurTeamProps image="image/team1.jpg" heading="Team6"/>
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
