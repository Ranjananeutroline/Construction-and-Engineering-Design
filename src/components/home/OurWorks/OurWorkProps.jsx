import React from 'react'

function OurWorkProps({image,}) {
  return (
    <>
       <div className="row p-5">
         <div className="col-sm-5 work-caption">
                  <h5
                    style={{
                      textAlign: "left",
                      fontSize: "30px",
                      paddingBottom: "8px",
                    }}
                  >
                    Our Works
                  </h5>
                  <br />
                  <p
                    style={{
                      textAlign: " left",
                      fontSize: "15px",
                      paddingRight: "20px",
                      fontFamily: "calibri",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "orangered",
                      }}
                    >
                      Lorem ipsum
                    </span>
                    amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                <div className="col-sm-7 p-4">
                  <img
                    src={image}
                    alt="Chicago"
                    className="d-block"
                    height="400px"
                    width="100%"
                    style={{
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  />
                </div>
                </div>
    </>
  )
}

export default OurWorkProps