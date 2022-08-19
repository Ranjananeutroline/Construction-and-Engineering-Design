import React from 'react'
import { Carousel } from 'react-bootstrap'

import "./slider.css"
function Slider() {
  return (
    <>
     <div className="first">
    <Carousel>
  <Carousel.Item interval={3000} className="carousel-all">
    <img
      className="imagebanner"
      src="/images/about3.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Company</h3>
      <p className='Hellotxt'>
        We build custom IT solutions customer’s   <br />
       simplify process and increase  revenue.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000} className="carousel-all">
    <img
      className="imagebanner"
      src="/images/about1.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Our People</h3>
      <p className='Hellotxt'> 
      We are young, innovative,skilled, ambitious,<br/>
       and trusted group of people providing IT solutions.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000} className="carousel-all">
    <img
      className="imagebanner"
      src="/images/about2.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Team Members</h3>
      <p className='Hellotxt'>Amazing team members,Self motivated <br/>
               welcomes new & innovative ideas.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    </>
  )
}

export default Slider