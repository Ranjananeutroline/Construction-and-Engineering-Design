import React from 'react';
import main from './main.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ClientCarousel() {
  return (
    <div className='container p-3'>
       <Carousel>
      <Carousel.Item>
      <Row className='client-section p-5'>
        <Col sm={4} className='client-column p-3'>
            <div className='client-image p-2'>
            <img
              style={{height:200}}
              src="client2.jpg"
              alt="First slide"
            />
            </div>
            
            <div className='client-caption p-2'>
            <h5>Client 1</h5>
            <div className='client-p p-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt</p>
            </div>
            </div>
        
        </Col>
        <Col sm={4} className='client-column p-3'>
            <div className='client-image p-2'>
            <img
              style={{height:200}}
              src="client3.jpg"
              alt="First slide"
            />
            </div>

            <div className='client-caption p-2'>
            <h5>Client 2</h5>
            <div className='client-p p-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt</p>
            </div>
            </div>
        </Col>
        <Col sm={4} className='client-column p-3'>
        <div className='client-image p-2'>
            <img
              style={{height:200}}
              src="client4.jpg"
              alt="First slide"
            />
            </div>

            <div className='client-caption p-2'>
            <h5>Client 3</h5>
            <div className='client-p p-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt</p>
            </div>
            </div>
        </Col>
      </Row>
        
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Row className='client-section p-5'>
        <Col sm={4} className='client-column p-3'>
        <div className='client-image p-2'>
            <img
              style={{height:200}}
              src="client4.jpg"
              alt="First slide"
            />
            </div>

            <div className='client-caption p-2'>
            <h5>Client 4</h5>
            <div className='client-p p-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt</p>
            </div>
            </div>
        </Col>
        <Col sm={4} className='client-column p-3'>
        <div className='client-image p-2'>
            <img
              style={{height:200}}
              src="client3.jpg"
              alt="First slide"
            />
            </div>

            <div className='client-caption p-2'>
            <h5>Client 5</h5>
            <div className='client-p p-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt</p>
            </div>
            </div>
        </Col>
        <Col sm={4} className='client-column p-3'>
        <div className='client-image p-2'>
            <img
              style={{height:200}}
              src="client2.jpg"
              alt="First slide"
            />
            </div>

            <div className='client-caption p-2'>
            <h5>Client 6</h5>
            <div className='client-p p-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt</p>
            </div>
            </div>
        </Col>
      </Row>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}
