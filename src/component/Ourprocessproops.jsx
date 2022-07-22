import React from 'react'
import "./Ourprocess.css"

function Ourprocessproops({heading,description,image}) {
  return (
    
    <div className='process'>
         <img src={image} 
        className="image"
        alt="image_of_process" /> 
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