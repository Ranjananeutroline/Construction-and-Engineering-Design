import React from 'react'

function OurWorkProps({image,}) {
  return (
    <>
       <div className="row p-3">
         <div className="col-sm-6 work-caption">
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "30px",
                      paddingTop:"19px",
                      paddingLeft:"10px",
                      fontWeight:"528",

                    }}
                  >
                    Our Works
                  </h3>
                 
                  <p
                    style={{
                      textAlign: " left",
                      fontSize: "15px",
                      paddingRight: "20px",
                      fontFamily: "calibri",
                      textAlign:"justify",
                      paddingLeft:"10px",
                      paddingTop:"13px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "550px",
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
                    commodo consequat.sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                <div className="col-sm-6 p-2">
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