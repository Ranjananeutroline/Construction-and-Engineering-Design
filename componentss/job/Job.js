import React from 'react'
import './job.css'
import JobWindow from './JobWindow'
const Job = () => {
  return (
    <div className="mainJob">
    <div className="flexJob">
    <div className="jobImage"><img src="./images/job.png" alt="" /></div>
    <div className="jobContent">
    <h2 className='headingjob' >We are looking for a talented Developer</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus obcaecati cum voluptatem,
    obcaecati 
     error voluptatum expedita odio minima dicta libero natus eius non provident facilis
      voluptas voluptatibus nam tempora. Quibusdam, quis?</p>
    {/* <button className=' d-grid mx-auto justify-content-center bg-info'>Current Openings</button> */}
    <JobWindow />

    
    </div>
    </div>
    </div>
  )
}

export default Job