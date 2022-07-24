import React from 'react'

function ContactUs() {
  return (
   <>
     <div className="container p-4" style={{backgroundColor:"rgb(231, 243, 247)"}}>
        <h4 style={{color:"blue"}}>Contact Us</h4>
        <hr style={{width: "80px",color:"blue"}} />
        <div className="row justify-content-around p-3">
            <div className="col-sm-7 p-4"
                style={{backgroundColor: "white",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" style={{paddingBottom: "2px"}}>Name:</label>
                        <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" style={{paddingBottom: "2px"}}>Email:</label>
                        <input type="name" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <label htmlFor="country" style={{paddingBottom: "2px"}}>Country:</label>
                            <select className="form-select">
                                <option>Nepal +977</option>
                                <option>India</option>
                                <option>USA</option>
                                <option>Australia</option>
                            </select>
                        </div>
                        <div className="col-sm-8">
                            <label htmlFor="phone" style={{paddingBottom: "2px"}}>Phone:</label>
                            <input type="phone" className="form-control" id="email" placeholder="Enter number" name="phone" />
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="comment" style={{paddingBottom: "2px"}}>Your message:</label>
                        <textarea className="form-control" rows="5" id="comment" placeholder="please describe what you need"
                            name="text"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" id="agree" name="agree" value="Terms" />
                        <label htmlFor="agree" style={{fontSize:"12px"}}>I agree to the Terms of Service and Privacy
                            Policy.</label>
                    </div>

                    <div className="row p-2">
                        <div className="col-sm-4 p-2"
                            style={{backgroundColor:"white", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 5px 18px 0 rgba(0, 0, 0, 0.15)"}}>
                            <input type="checkbox" id="recaptcha" name="recaptcha" value="Condition" />
                            <label htmlFor="recaptcha" style={{fontSize:"12px"}}>I'm not a robot</label>
                            <div style={{float: "right",paddingRight:"14px", textAlign:"start"}}>
                                <img className="rounded-circle" src="image/recaptcha_image.jpg" height="30px" width="38px;" alt="icon"/>
                            </div>

                        </div>

                    </div>
                    <div className="sendbtn-div pb-3 pt-2">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>

                </form>
            </div>
            <div className="col-sm-4 p-4">
                <h5>How Can We Help?</h5>
                <p style={{fontSize: "15px" ,fontFamily:"calibri"}}>Please select below options related to your inquiry. If
                    you don't find
                    what you need, fill out our contact form.
                </p><br />
                <div className="row p-3"
                    style={{backgroundColor: "white", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <div className="col-sm-12 p-3">
                        <h6 style={{fontSize: "13px", textAlign: "left"}}>Contact Information</h6>
                        {/* <hr style={{width: "60px", color:"blue" /> */}
                        <div className="row">
                            <div className="col-sm-3 p-2" style={{textAlign: "end"}}>
                                <img className="rounded-circle" src="image/phone.jpg" height="28px" width="35px;" alt="icon"/>
                            </div>
                            <div className="col-sm-6 p-2" style={{textAlign:"start"}}>
                                <p style={{fontSize:"12px", textAlign:"start"}}>+977 1234567890</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 p-2"  style={{textAlign: "end"}}>
                                <img className="rounded-circle" src="image/email.png" height="28px" width="30px;" alt="icon"/>
                            </div>
                            <div className="col-sm-6 p-2" style={{textAlign: "start"}}>
                                <p style={{fontSize:"12px", textAlign:"start"}}><a href="/#">info@neutroline.com</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 p-2" style={{textAlign: "end"}}>
                                <img className="rounded-circle" src="image/location.png" height="30px" width="35px;"alt="icon" />
                            </div>
                            <div className="col-sm-6 p-2" style={{textAlign: "start"}}>
                                <p style={{fontSize:"12px" ,textAlign:"start"}}>Shitalnagar, Devdaha-7<br/>Rupandehi, Nepal
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{justifyContent: "center"}}>
                        <div className="col-sm-3 p-1" style={{textAlign:"center"}}>
                            <img className="rounded-circle" src="image/fb.png" height="50px" width="50px;"  alt="social media icon"/>
                        </div>
                        <div className="col-sm-3 p-1" style={{textAlign:"center"}}>
                            <img className="rounded-circle" src="image/twitt.jpg" height="50px" width="50px;" alt="social media icon"/>
                        </div>
                        <div className="col-sm-3 p-1" style={{textAlign:"center"}}>
                            <img className="rounded-circle" src="image/linkedin.png" height="50px" width="50px;" alt="social media icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default ContactUs