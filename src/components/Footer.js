import React from 'react';
import main from './main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Footer() {
    return(
        <div className='Container fluid mb-5'>
            <Row>
            <Col sm={3} className='footer-column1 p-3'>
                <div className='footer-logo'>
                    <img src='logofooter.png' height={52} width={72}/>
                </div>
                <div className='logo-p'>
                    <p>Engineering Consulting</p>
                </div>
               <div className='col1-p'>
                <p>We the team of experts <br></br>are there to help you</p>
                </div>
                <div className='col1-read'>
                    <p><a href='#'>read more</a></p>
                </div>
                <div className='col1-follow'>
                    <p>Follow us on</p>
                </div>
                <Row className='col1-row'>
                    <Col sm={12} className='follow-img p-1'>
                        <img className='rounded-circle' src='linkedin.png' height={30} width={30}/>
                        <img className='rounded-circle' src='facebook.png' height={30} width={30}/>
                        <img className='rounded-circle' src='twitt.jpg' height={30} width={30}/>
                        <img className='rounded-circle' src='insta.png' height={30} width={30}/>
                    </Col>
                </Row>
            </Col>
            <Col sm={5} className='footer-column2 p-5'>
                <div className='col2head-p'>
                    <p>Useful Links</p>
                </div>
                <div className='links-p'>
                    <div>
                        <p>Our Official Blog</p>
                    </div>
                    <div>
                        <p>Official Portal of Government of Nepal</p>
                    </div>
                    <div>
                        <p>Department of Transport Management</p>
                    </div>
                    <div>
                        <p>Rupandehi Municipality office</p>
                    </div>
                </div>
            </Col>
            <Col sm={4} className='footer-column3 p-5'>
                <div className='col3-contact'>
                    <p>Contact</p>
                </div>
                <Row className='col3-row pt-3'>
                    <Col sm={3} className='col3-img1'>
                    <img className='rounded-circle text-align-end' src='footerlocation.png' height={25} width={25}/>
                    </Col>
                    <Col sm={6} className='col3-p'>
                        <p>Shitalnagar, Devdaha-7</p>
                    </Col>
                </Row>
                <Row className='col3-row pt-3'>
                    <Col sm={3} className='col3-img1'>
                    <img className='rounded-circle text-align-end' src='footermail.png' height={25} width={25}/>
                    </Col>
                    <Col sm={6} className='col3-p'>
                        <p>info@neutroline.com</p>
                    </Col>
                </Row>
                <Row className='col3-row pt-3'>
                    <Col sm={3} className='col3-img1'>
                    <img className='rounded-circle text-align-end' src='footercall.jpg' height={25} width={25}/>
                    </Col>
                    <Col sm={6} className='col3-p'>
                        <p>+977 1234567890</p>
                    </Col>
                </Row>
                
            </Col>
            </Row>
        </div>
    )
}
  

