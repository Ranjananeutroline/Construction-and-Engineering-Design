import React from "react";
import "./Ourprocess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Process() {
  return (
    <Container fluid className="main-process">
      <h3 className="ourprocess_heading">Our Process</h3>
      <Row className="second-process">
        <Col className="div-col" lg="3" md="6" sm="12">
          <img src="./image/pp1.jpeg" alt="first"></img>
          <h6>Meeting</h6>
          <div className="div-paragraph">
            <p>
              meet with our clients to discuss their ideas and find a solution.
            </p>
          </div>
        </Col>
        <Col className="div-col" lg="3" md="6" sm="12">
          <img src="./image/pp2.jpeg" alt="second"></img>
          <h6>Design</h6>
          <div className="div-paragraph">
            <p>
              Designing the task according to the demand and need of the client.
            </p>
          </div>
        </Col>
        <Col className="div-col" lg="3" md="6" sm="12">
          <img src="./image/pp4.jpeg" alt="third"></img>
          <h6>Develop</h6>
          <div className="div-paragraph">
            <p>Developing the product according to the demand of the client.</p>
          </div>
        </Col>
        <Col className="div-col" lg="3" md="6" sm="12">
          <img src="./image/pp3.jpeg" alt="fourth"></img>
          <h6>Deliver</h6>
          <div className="div-paragraph">
            <p>
              Delivering the best and quality product in the given time by the
              client.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
