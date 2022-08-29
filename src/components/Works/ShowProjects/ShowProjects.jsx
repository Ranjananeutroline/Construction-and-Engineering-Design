import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShowProjectProps from "./ShowProjectProps";

function ShowProjects() {
  return (
    <>
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "rgb(231, 243, 247)" }}
      >
        <div className="container p-2">
          <div className="row p-3 justify-content-center">
            <div
              className="col-md-5 p-2"
              style={{
                textAlign: "center",
                borderBottom: "2px solid orangered",
              }}
            >
              <h5>
                <span style={{ fontSize: 40, color: "orangered" }}>C</span>oming
                together is the Beginning.
                <br />
                <span style={{ fontSize: 18 }}>
                  Keeping together is Progress.
                </span>
                <br />
                <span style={{ fontSize: 16 }}>
                  Working together is Success.
                </span>
              </h5>
            </div>
          </div>
          <Container>
            <Row className="gallery-row p-3">
              <ShowProjectProps />
            </Row>
            <div
              className="row p-3"
              style={{
                backgroundColor: "white",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <ShowProjectProps />
              <ShowProjectProps />
              <ShowProjectProps />
            </div>
            <div
              className="row p-3"
              style={{
                backgroundColor: "white",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <ShowProjectProps />
              <ShowProjectProps />
              <ShowProjectProps />
            </div>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}

export default ShowProjects;
