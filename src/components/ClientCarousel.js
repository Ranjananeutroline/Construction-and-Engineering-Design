import React from 'react';
import main from './main.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ClientCarousel() {
  return (
    <div className='container'>
       <Carousel>
      <Carousel.Item>
      <Row className='client-section p-2'>
        <Col sm={4}>
        <img
          className="client-img"
          style={{height:200}}
          src="client2.jpg"
          alt="First slide"
        />
        <div className='client-caption'>
        <h5>Client 1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt</p>
        </div>
        
        </Col>
        <Col sm={4}>
        <img
          className="client-img"
          style={{height:200}}
          src="client3.jpg"
          alt="First slide"
        />
        <h5>Client 1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt</p>
        </Col>
        <Col sm={4}>
        <img
          className="client-img"
          style={{height:200}}
          src="client4.jpg"
          alt="First slide"
        />
        <h5>Client 1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt</p>
        </Col>
      </Row>
        
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Row className='client-section'>
        <Col sm={4}>
        <img
          className="client-img"
          style={{height:200}}
          src="client4.jpg"
          alt="First slide"
        />
        <h5>Client 1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt</p>
        </Col>
        <Col sm={4}>
        <img
          className="client-img"
          style={{height:200}}
          src="client3.jpg"
          alt="First slide"
        />
        <h5>Client 1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt</p>
        </Col>
        <Col sm={4}>
        <img
          className="client-img"
          style={{height:200}}
          src="client2.jpg"
          alt="First slide"
        />
        <h5>Client 1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt</p>
        </Col>
      </Row>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}
