import React from 'react'
import { Carousel } from 'react-bootstrap'

import "./slider.css"
function Slider() {
  return (
    <>
     <div className="first">
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/images/figmaImage.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>About Company</h3>
      <p>We are a young, innovative, motivated, skilled, ambitious, and trusted group of people working together on providing IT solutions globally.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={600}>
    <img
      className="d-block w-100"
      src="/images/figmaImage.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="/images/figmaImage.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    </>
  )
}

export default Slider