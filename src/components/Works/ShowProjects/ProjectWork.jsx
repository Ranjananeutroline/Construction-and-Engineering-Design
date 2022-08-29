import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./project.css";
import ProjectProps from "./ProjectProps";
function ProjectWork() {
  return (
    <>
      <div className="Gallery-Container-fluid">
        <Container>
          <Row className="gallery-row p-3">
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg1.jpg" />
            </Col>
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg2.jpg"/>
            </Col>
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg3.jpg" />
            </Col>
          </Row>
          <Row className="gallery-row p-3">
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg4.jpg" />
            </Col>
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg5.jpg" />
            </Col>
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg6.jpg" />
            </Col>
          </Row>
          <Row className="gallery-row p-3">
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg7.jpg"/>
              {/* "image/workpageimg/allimg1.jpg" */}
            </Col>
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg8.jpg"/>
            </Col>
            <Col sm={4} className="flip-card p-3">
              <ProjectProps image="image/workpageimg/allimg9.jpg"/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectWork;
