import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./ourServices.css";
import PropsServices from "./PropsServices";

function OurServices() {
  return (
    <>
      <div>
       <div
          className="slideshow-container-xxl carousel slide service_top"
          id="carouselExampleSlidesOnly"
          data-bs-ride="carousel"
          style={{ backgroundColor: "rgb(231, 243, 247)" }}>
             <h2
          style={{
            textAlign: "center",
            fontweight: "bolder",
            fontFamily: "arial",
            marginBottom:"0px",
            paddingTop:"16px",
            
          }}
        >
          Our Services
        </h2>
        <p style={{ textAlign: "center",marginBottom:"0px"}}>
          It's how we follow through the customer!!
        </p>

          <Carousel className="service_carousel">
            <Carousel.Item interval={5000}>
              <Row className="justify-content-around">
                <Col sm={4} className="service_col">
                  <PropsServices image="image/service1.jpg" heading="Service 1"/>
                  {/* image/service1.jpg */}
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices image="image/service2.jpg"heading="Service 2"/>
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices image="image/service3.jpg" heading="Service 3"/>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Row className="justify-content-around">
                <Col sm={4} className="service_col">
                  <PropsServices image="image/service4.jpg" heading="Service 4"/>
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices image="image/service5.jpg" heading="Service 5" />
                </Col>
                <Col sm={4} className="service_col">
                  <PropsServices image="image/service6.jpg" heading="Service 6" />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
      
        </div>
      </div>

      {/* our works starts here */}
      {/* <OurServicesProps /> */}
    </>
  );
}

export default OurServices;
