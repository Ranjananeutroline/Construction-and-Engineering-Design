import React, { Component } from 'react'
import './Testomonial.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container,Image } from 'react-bootstrap';

import c2 from "./image/c1.jpeg";
import pr1 from "./image/111.png";
import pr2 from "./image/112.png";
import pr3 from "./image/113.png"

export class Testomonial extends Component {
  render() {
    return (
      <div className='testo'>
         <Carousel>
      <Carousel.Item>
        <Image
          className="carimage"
         src={c2}
          alt="First slide"
         
        />
        <Carousel.Caption>
          <img src={pr2} className='profile' alt='profileimage' fluid></img>
          <h4>Ram parshad khattri</h4>
          <h5>CEO</h5>
          <h6 style={{color:"black"}}>Nepal chamber of commerce</h6>
          <p>Provide qualitu service a the given time .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="carimage"
          src={c2}
          alt="second slide"
        />

        <Carousel.Caption>
        <img src={ pr2 } className='profile' alt='profileimage' fluid></img>
          <h4>Hari Parshad Gautam</h4>
          <h5>MD</h5>
          <h6 style={{color:"black"}}>Tata Group Nepal</h6>
          <p>The team is well spoken and helpful.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image
          className="carimage"
          src={c2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <img src={pr3} className='profile' alt='profileimage' fluid></img>
          <h4>Gita Kumari Shrestha</h4>
          <h5>President</h5>
          <h6 style={{color:"black"}}>Nepal Nursing Council</h6>
          <p>
            The team is well spoken and helpful.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       

      </div>
    )
  }
}

export default Testomonial