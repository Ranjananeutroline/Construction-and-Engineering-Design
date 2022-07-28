import React from 'react'
import { Carousel } from 'react-bootstrap'

import "./slider.css"
function Slider() {
  return (
    <>
     <div className="first">
    <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-80 m-auto bg-dark"
      src="/images/people2.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Company</h3>
      <p>We build custom IT solutions and products that accelerate customer’s business growth, simplify process and increase revenue.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-80 m-auto"
      src="/images/people.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Our People</h3>
      <p> We are a young, innovative, motivated, skilled, ambitious, and trusted group of people working together on providing IT solutions globally.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-80 m-auto"
      src="/images/people1.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Team Members</h3>
      <p>Amazing team members, flexible working hours, no chain of command, communicate with any level of management team directly, welcomes new & innovative ideas.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    </>
  )
}

export default Slider