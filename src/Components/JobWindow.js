import React, { useState } from 'react';
import main from './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function JobWindow() {
    const [show, setShow] = useState(false);
  return (
    <div>
        <Container>
        <Button variant="primary" onClick={() => setShow(true)}>
            Click here
        </Button>
        

      <Modal 
        size='md'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-80w"
        aria-labelledby="example-custom-modal-styling-title"
        scrollable='true'
        
        
      >
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title id="example-custom-modal-styling-title">
            <h5>Vacancy Announcement !!</h5>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <div className='all-div'>
        <div className='div-1'>
          <h6>PHP Developer</h6>
          </div>
          <div className='div-para'>
          <ReactReadMoreReadLess
            readMoreClassName='readMoreClassName'
            readLessClassName='readLessClassName'
            charLimit={133}
            readMoreText='more'
            readLessText='less'
            >                                 
            We are looking for responsible candidate for creating and implementing an
            array of web-based products using PHP, MySQL, Ajax, and JavaScript.
            Requirements: Knowledgeof PHP web frameworks including Yii, Laravel and also
            front-end technologies like CSS3, JavaScript and HTML5.
            Number of Positions: 2
            Salary: Negotiable
            Location: Rupandehi, Nepal...
            </ReactReadMoreReadLess>
          </div>
        </div>
          
        <div className='all-div'>
        <div className='div-1'>
          <h6>Front-end Developer</h6>
          </div>
          <div className='div-para'>
          <ReactReadMoreReadLess
            readMoreClassName='readMoreClassName'
            readLessClassName='readLessClassName'
            charLimit={133}
            readMoreText='more'
            readLessText='less'
            >                                 
            We are looking for responsible candidate for creating and implementing an
            array of web-based products using PHP, MySQL, Ajax, and JavaScript.
            Requirements: Knowledgeof PHP web frameworks including Yii, Laravel and also
            front-end technologies like CSS3, JavaScript and HTML5.
            Number of Positions: 2
            Salary: Negotiable
            Location: Rupandehi, Nepal...
            </ReactReadMoreReadLess>
          </div>
        </div>

        <div className='all-div'>
        <div className='div-1'>
          <h6>Back-end Developer</h6>
          </div>
          <div className='div-para'>
          <ReactReadMoreReadLess
            readMoreClassName='readMoreClassName'
            readLessClassName='readLessClassName'
            charLimit={133}
            readMoreText='more'
            readLessText='less'
            >                                 
            We are looking for responsible candidate for creating and implementing an
            array of web-based products using PHP, MySQL, Ajax, and JavaScript.
            Requirements: Knowledgeof PHP web frameworks including Yii, Laravel and also
            front-end technologies like CSS3, JavaScript and HTML5.
            Number of Positions: 2
            Salary: Negotiable
            Location: Rupandehi, Nepal...
            </ReactReadMoreReadLess>
          </div>
        </div>

        <div className='all-div'>
        <div className='div-1'>
          <h6>UI/UX Designer</h6>
          </div>
          <div className='div-para'>
          <ReactReadMoreReadLess
            readMoreClassName='readMoreClassName'
            readLessClassName='readLessClassName'
            charLimit={133}
            readMoreText='more'
            readLessText='less'
            >                                 
            We are looking for responsible candidate for creating and implementing an
            array of web-based products using PHP, MySQL, Ajax, and JavaScript.
            Requirements: Knowledgeof PHP web frameworks including Yii, Laravel and also
            front-end technologies like CSS3, JavaScript and HTML5.
            Number of Positions: 2
            Salary: Negotiable
            Location: Rupandehi, Nepal...
            </ReactReadMoreReadLess>
          </div>
        </div>
        <p className='resume-para'>If interested, please apply. You may also send your resume to
            <br></br>example@gmail.com</p>
        </Modal.Body>
      </Modal>
    </Container>
    </div>
     
    )
}
