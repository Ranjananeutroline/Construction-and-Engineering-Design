import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./jw.css";

export default function JobWindow() {
    const [show, setShow] = useState(false);
    const handleClickOpen = () => {
        setShow(true);
      };
    
      const handleClose = () => {
        setShow(false);
      };
    
  return (
    <div>

    <div className='openbtn' >

        <Button  className='jobbtn'  onClick={handleClickOpen}>
            Current Openings
        </Button>
        </div>

      <Modal 
        size='lg'
        show={show}
        // onHide={() => setShow(false)}
        onHide={handleClose}
        dialogClassName="modal-80w"
        aria-labelledby="example-custom-modal-styling-title"
        scrollable='true'
      >
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title id="example-custom-modal-styling-title">
            <h3>Vacancy Announcement !!</h3>
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
            charLimit={217}
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
            charLimit={217}
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
            charLimit={217}
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
            charLimit={217}
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
        <p className='resume-para'> <span style={{color:"blue"}}>If interested, please apply.</span> You may also send your resume to
            <br></br>example@gmail.com</p>
        </Modal.Body>
      </Modal>
    
    </div>
     
    )
}