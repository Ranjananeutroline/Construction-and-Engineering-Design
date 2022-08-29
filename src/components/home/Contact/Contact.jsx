import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaViber, FaWhatsappSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import "./contact.css";

function Contact() {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "rgb(231, 243, 247)", width: "95%" }}
      >
        <h3
          style={{
            color: "blue",
            display: "flex",
            paddingTop: "12px",
            paddingLeft: ".7rem",
          }}
        >
          Contact Us
        </h3>
        <hr
          style={{
            width: "120px",
            color: "blue",
            marginBottom: "15px",
            marginTop: "-10px",
            marginLeft: "1rem",
          }}
        />
        <div
          className="row justify-content-around"
          style={{ paddingBottom: "3rem",marginBottom:"1rem" }}
        >
          <div
            className="col-md-7"
            style={{
              backgroundColor: "white",
              boxShadow:
                "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <form>
              <div className="p-1">
                <label
                  htmlFor="name"
                  style={{
                    display: "flex",
                    paddingBottom: "2px",
                    paddingTop: "10px",
                    paddingLeft: "4px",
                  }}
                >
                  Name:
                </label>
                <input
                  type="name"
                  className="form-control"
                
                  id="name"
                  placeholder="Enter name"
                  name="name"
                />
              </div>
              <div className="p-1">
                <label
                  htmlFor="name"
                  style={{
                    display: "flex",
                    paddingBottom: "2px",
                    paddingLeft: "4px",
                  }}
                >
                  Email:
                </label>
                <input
                  type="name"
                  className="form-control"
                 
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="row p-1">
                <div className="col-sm-4">
                  <label
                    htmlFor="country"
                    style={{
                      display: "flex",
                      paddingBottom: "2px",
                      paddingLeft: "4px",
                    }}
                  >
                    Country:
                  </label>
                  <input
                  type="Country"
                  className="form-control"
                 
                  id="Country"
                  placeholder="Nepal +977"
                  name="Country"
                />
                </div>
                <div className="col-sm-8">
                  <label
                    htmlFor="phone"
                    style={{
                      display: "flex",
                      paddingBottom: "2px",
                      paddingLeft: "4px",
                    }}
                  >
                    Phone:
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                  
                    id="email"
                    placeholder="Enter number"
                    name="phone"
                  />
                </div>
              </div>
              <div className="p-1">
                <label
                  htmlFor="comment"
                  style={{
                    display: "flex",
                    paddingBottom: "2px",
                    paddingLeft: "4px",
                  }}
                >
                  Message:
                </label>
                <textarea
                  className="form-control"
                  style={{ fontSize: "14px", height: "90px"}}
                  rows="5"
                  id="comment"
                  placeholder="Your Message"
                  name="text"
                ></textarea>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "6px",
                  marginTop: "0px",
                }}
              >
                <input
                  type="checkbox"
                  id="agree"
                  style={{ marginleft: "7px" }}
                  name="agree"
                  value="Terms"
                />
                <label
                  htmlFor="agree"
                  style={{ fontSize: "12px", padding: "8px" }}
                >
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>

              <div
                className="row recaptcha_contact"
                style={{
                  display: "flex",
                  paddingLeft: "18px",
                  paddingTop: "2px",
                }}
              >
                <div
                  className="col-sm-5 p-2"
                  style={{
                    backgroundColor: "white",
                    boxShadow:
                      "0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <input
                    type="checkbox"
                    id="recaptcha"
                    name="recaptcha"
                    value="Condition"
                  />
                  <label
                    htmlFor="recaptcha"
                    style={{ fontSize: "12px", padding: "5px" }}
                  >
                    I'm not a robot
                  </label>
                  <div
                    style={{
                      float: "right",
                      paddingRight: "14px",
                      textAlign: "start",
                      display: "flex",
                    }}
                  >
                    <img 
                      className="rounded-circle"
                      src="image/recaptcha_image.jpg"
                      height="35px"
                      width="38px"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="sendbtn-div pb-2 pt-1">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    display: "flex",
                    float: "right",
                    marginBottom: "20px",
                    marginRight: "40px",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="contact_us_right col-md-4" style={{ padding: "0" }}>
            <div className="information_header">
              <h1 className="howCanWeHelp">Get in touch !</h1>
              <p>
                We are 24/7 available for you.
                <span>Feel free to contact us with below options. </span>
              </p>
            </div>
            <div className="info">
              <h1>Contact Information </h1>
              <hr className="Ci_hr" />
              <div className="information">
                <IconContext.Provider value={{ className: "connect-us-icons" }}>
                  <div className="call-msg-lt">
                    <FiPhoneCall
                      style={{
                        marginLeft: "-1rem",
                        display: "flex",
                        height: "20px",
                      }}
                    />
                    <span>+977 1234567890</span>
                  </div>
                  <div className="call-msg-lt">
                    <TbMessage
                      style={{ marginLeft: "-.8rem", display: "flex" }}
                    />
                    <span>info@neutroline.com</span>
                  </div>
                  <div className="call-msg-lt">
                    <ImLocation
                      style={{ marginLeft: "-10px", display: "flex" }}
                    />
                    <span>Devdaha-7 Rupandehi, Nepal </span>
                  </div>
                </IconContext.Provider>
              </div>
              <hr className="Ci_hr" />

              <IconContext.Provider value={{ className: "react-icons" }}>
                <div className="social-links">
                  <a href="/#">
                    {" "}
                    <BsFacebook style={{ color: "blue" }} />
                  </a>
                  <a href="/#">
                    <FaViber style={{ color: "#59267c" }} />
                  </a>

                  <a href="/#">
                    {" "}
                    <FaWhatsappSquare style={{ color: "	#25d366" }} />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
