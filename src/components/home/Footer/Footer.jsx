import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container-fluid">
        <div className="row ">
          <div
            className="col-sm-3 p-3"
            style={{
              border: "1px solid",
              backgroundColor: "navy",
            
            }}
          >
            <div style={{ textAlign: "left, padding: 5px", float: "left" }}>
              <img
                src="image/logofooter.png"
                height="52px"
                width="72px"
                alt="logo"
              />
            </div>
            <div
              style={{
                color: "white",
                paddingTop: 20,
                textAlign: "center",
                paddingBottom: 3,
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: 20,
              }}
            >
              <p>Engineering Consulting</p>
            </div>
            <hr style={{ color: "white" }} />

            <div style={{ color: "white", textAlign: "center", fontSize: 15 }}>
              <p>
                We the team of experts
                <br />
                are there to help you
              </p>
            </div>
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              {" "}
              <p>read more</p>
            </div>
            <div style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              <p>Follow us on</p>
            </div>
            <div
              className="row justify-content-around"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-12">
                <img
                  className="rounded-circle footer_icon"
                  src="image/linkedin.png"
                  height="30px"
                  width="30px;"
                  alt="social media icon"
                
                />
                <img
                  className="rounded-circle footer_icon"
                  src="image/facebook.png"
                  height="30px"
                  width="30px;"
                  alt="social media icon"
                />
                <img
                  className="rounded-circle footer_icon"
                  src="image/twitt.jpg"
                  height="30px"
                  width="30px;"
                  alt="social media icon"
                />
                <img
                  className="rounded-circle footer_icon" 
                  src="image/insta.png"
                  height="30px"
                  width="30px;"
                  alt="social media icon"
                />
              </div>
            </div>
          </div>
          <div
            className="col-sm-5 p-5"
            style={{ backgroundColor: "rgb(102, 102, 160)" }}
          >
            <div
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: 20,
              }}
            >
              <p></p>
              <p>Useful Links</p>
            </div>
            <hr style={{ color: "white" }} />
            <div style={{ color: "white", textAlign: "center", fontSize: 13 }}>
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
          </div>
          <div
            className="col-sm-4 p-5"
            style={{
              backgroundColor: "rgb(102, 102, 160)",
              
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: 20,
              }}
            >
              <p>Contact</p>
            </div>
            <hr style={{ color: "white" }} />

            <div
              className="row justify-content-center"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-3" style={{ textAlign: "end" }}>
                <img
                  className="rounded-circle"
                  src="image/footerlocation.png"
                  height="25px"
                  width="25px;"
                  alt="logo"
                />
              </div>
              <div
                className="col-md-6"
                style={{ fontSize: 14, textAlign: "left" }}
              >
                <p style={{ color: "white" }}>Shitalnagar, Devdaha-7</p>
              </div>
            </div>
            <div
              className="row justify-content-center footer_contact"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-3" style={{ textAlign: "end" }}>
                <img
                  className="rounded-circle"
                  src="image/footermail.png"
                  height="25px"
                  width="25px;"
                  alt="logo"
                />
              </div>
              <div
                className="col-md-6"
                style={{ fontSize: 14, textAlign: "left" }}
              >
                <p style={{ color: "white" }}>info@neutroline.com</p>
              </div>
            </div>
            <div
              className="row justify-content-center"
              style={{ textAlign: "center" }}
            >
              <div className="col-md-3" style={{ textAlign: "end" }}>
                <img
                  className="rounded-circle"
                  src="image/footercall.jpg"
                  height="25px"
                  width="25px;"
                  alt="logo"
                />
              </div>
              <div
                className="col-md-6"
                style={{ fontSize: 14, textAlign: "left" }}
              >
                <p style={{ color: "white" }}>+977 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
