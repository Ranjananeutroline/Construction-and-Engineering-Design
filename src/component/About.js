import React from 'react'
import { Carousel } from 'react-bootstrap'
import './about.css'

const About = () => {
  return (
    <div className="aboutSection">
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
    <div className="second p-5">
    <div className="none"></div>
    <div className="image"><img src="images/man.png" alt="" /></div>
    <div className="textBox mt-5">
    <h1>Who We Are</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius rerum repellendus, expedita numquam tenetur minus aliquid! Qui obcaecati officia maiores placeat ducimus, atque voluptatum voluptate tenetur facere totam perferendis?</p>
    </div>
    <div className="nonee"></div>
    </div>
    <div className="third">
    <button className=' d-grid mx-auto justify-content-center bg-info'>Our Team</button>
    <div className="flexBox">
    <div className="member1 d-grid justify-content-center bg-info" >dbya</div>
    <div className="member2 bg-success">dbya</div>
    <div className="member3 bg-info">dbya</div>
    </div>
    </div>
    <div className="fourth"></div>
    <div className="fifth"></div>
    <div className="sixth"></div>
    <div className="seventh"></div>
    </div>
  )
}

export default About