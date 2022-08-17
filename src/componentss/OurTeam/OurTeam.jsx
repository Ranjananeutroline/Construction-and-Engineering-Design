import React from 'react'
import {  FaFacebook,FaInstagram,FaLinkedinIn,FaTwitter} from "react-icons/fa";
import "./ourTeam.css"
function OurTeam() {
  return (
    <>
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
    </>
  )
}

export default OurTeam