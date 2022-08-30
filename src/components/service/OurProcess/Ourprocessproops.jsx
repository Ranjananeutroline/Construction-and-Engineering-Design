import React from 'react'
import "./Ourprocess.css"

function Ourprocessproops({heading,description,image}) {
  return (
    
    <div className='process'>
    <div className='process-image'>
    <img src={image} 
        className="image"
        alt="image_of_process" /> 
    </div>
         {/* <img src={image} 
        className="image"
        alt="image_of_process" />  */}
     <article className="info">
     <h5>{heading}</h5>
     <p>
      {description}
     </p>
     </article>
    </div>
  )
}

export default Ourprocessproops