import React from 'react'
import { Col} from "react-bootstrap";

function ShowProjectProps() {
  return (
    <>
     {/* <div className="col-md-4 flip-card p-3" style={{ height: 330 }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="image/workpageimg/allimg1.jpg"
                    height="300px"
                    width="100%"
                    style={{ border: "1px solid" }}
                    alt="project demonstration"
                  />
                </div>
                <div className="flip-card-back p-4">
                  <h5>Name</h5>
                  <p style={{ paddingTop: 4, fontSize: 14 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit sed do eiusmod tempor
                    incididunt ut labore
                  </p>
                </div>
              </div>
            </div> */}
<Col sm={4} className='flip-card p-3'>
<div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <img src="allimg1.jpg"/>
                            </div>
                            <div className='flip-card-back p-4'>
                                <h5>Name</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elitsed do eiusmod tempor incididunt ut labore
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    sed do eiusmod tempor incididunt ut labore
                                    </p>
                            </div>
                        </div>
                        </Col>
    </>
  )
}

export default ShowProjectProps