import React from 'react'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap'
import {  FaFacebook,FaInstagram,FaLinkedinIn,FaRegEye,FaRegPaperPlane,FaRegClock,FaTwitter} from "react-icons/fa";
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
    <div className="member1" >
    <img src="images/neu.png" alt="" />
    <h4>Suresh Rimal</h4>
    <p>We are always looking to add talent to our team!
    click the button below to see how you can apply for a job at Company</p>
    <h5>CEO</h5>
    <div className="icons">
    <FaFacebook className='db' />
    <FaInstagram  className='db'/>
    <FaLinkedinIn className='db'/>
    <FaTwitter className="db" />
    </div>
    </div>
    <div className="member2 ">
    <img src="/images/man.jpg" alt="" />
    <h4>Suresh Rimal</h4>
    <p>We are always looking to add talent to our team!
    click the button below to see how you can apply for a job at Company</p>
    <h5>CEO</h5>
    <div className="icons">
    <FaFacebook className='db' />
    <FaInstagram  className='db'/>
    <FaLinkedinIn className='db'/>
    <FaTwitter className="db" />
    </div>
    </div>
    <div className="member3">
    <img src="images/neu.png" alt="" />
    <h4>Suresh Rimal</h4>
    <p>We are always looking to add talent to our team!
    click the button below to see how you can apply for a job at Company</p>
    <h5>CEO</h5>
    <div className="icons">
    <FaFacebook className='db' />
    <FaInstagram  className='db'/>
    <FaLinkedinIn className='db'/>
    <FaTwitter className="db" />
    </div>
    
    </div>
    <div className="member4">
    <img src="images/neu.png" alt="" />
    <h4>Suresh KC</h4>
    <p>We are always looking to add talent to our team!
    click the button below to see how you can apply for a job at Company
    ok if you want ti then ok Neutroline</p>
    <h5>CoFounder</h5>
    <div className="icons">
    <FaFacebook className='db' />
    <FaInstagram  className='db'/>
    <FaLinkedinIn className='db'/>
    <FaTwitter className="db" />
    </div>
    </div>
    </div>
    </div>
    <div className="fourth p-5">
     <div className="box1">
     <FaRegEye className='vision' />
     <h4>Vision</h4>
     </div>
     <div className="box1">
     <FaRegPaperPlane className="vision" />
     <h4>Mission</h4>
     </div>
     <div className="box1 ">
     <FaRegClock className="vision" />
     <h4>History</h4>
     </div>
      

     <div className="box4 p-2">
     <div className="content">
     <h3 className='mt-4'>Vision</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consequatur doloremque nihil aperiam facilis quisquam quis repellat, explicabo laborum debitis blanditiis? Aliquid quasi modi at natus iusto recusandae autem iure.</p>
     </div>
     <div className="image"><img src="/images/vision.jpg" alt="" /></div>
     </div>
    </div>
    <div className="fifth">
   
    <div className="people">
    <div className="faltus"></div>
    <div className="hr"><hr /> </div>
    <div className="header">Our People</div>
    <div className="hr"><hr /></div>
    <div className="faltu"></div>
    </div>
    <div className="imgPeople mt-5">
    <div className="image1">
    <img src="/images/man.jpg" alt=""  className='avtar'/>
    <div class="overlay">
    <div class="text"> <p className='company'>"At this Company, I have the opportunity to learn from great minds, do great work for our clients, and have fun while doing it."</p> </div>
    <p style={{marginTop:'100%',marginLeft:'50px',color:'black'}}>Dibbya,FrontEnd Intern</p>
    </div>
    </div>
    <div className="image2">
    <img src="/images/man.jpg" alt="" className='avtar'/>
    
    </div>
    <div className="image3"><img src="/images/man.jpg" alt="" /></div>
    </div>
    </div>
    <div className="sixth"></div>
    <div className="seventh"></div>
    </div>
  )
}

export default About