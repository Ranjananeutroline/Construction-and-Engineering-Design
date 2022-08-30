import React from 'react'
import './footer.css'
import { AiTwotonePhone ,AiTwotoneHome,AiTwotoneMail} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footermain">
      <div className="footerflexbox">
        <div className="flexbox1">
          <h5>Engineering Consulting</h5>
            <p>We the team of experts <br /> are there to help you</p>
            <p className='para'>Follow us</p>
          <div className="footericon">
            <img  className='footerImage' src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="" />
            <img className='footerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
            <img className='footerImage' src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
            <img className='footerImage' src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
          </div>
        </div>
        <div className="flexbox2 ">
          <h5>Useful Links</h5>
            <p>Our Official Blog</p>
            <p className='para'>Official Portal of Government of Nepal</p>
            <p className='para'>Department of Transport Management</p>
            <p className='para'>Rupandehi Municipality office</p>
        </div>
        <div className="flexbox3">
          <h5>Contact</h5>
          <div className='div-1'>
            <p> &nbsp;<AiTwotonePhone className='footercall'style={{transform:"rotate(90deg)"}}/>
            &nbsp;&nbsp;&nbsp;+977 9849263457 &nbsp; &nbsp;</p>
          </div>
          <div className='div-1'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiTwotoneHome className='footerhome'/>
            &nbsp;&nbsp;&nbsp;Shitalnagar, Devdaha-7&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div className='div-1'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiTwotoneMail className='footeremail'/>
            &nbsp;&nbsp;&nbsp;info@neutroline.com &nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
        
      </div>
        <div className='second-footer'>
          <p>2022 Engineering Consultancy Pvt.Ltd. All Rights Reserved.</p>
        </div>
    </div>
  
    
    
  )
}

export default Footer