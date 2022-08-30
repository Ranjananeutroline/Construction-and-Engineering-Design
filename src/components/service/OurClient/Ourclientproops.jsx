import React from 'react'
import  "./ourclient.css"

function Ourclientproops({clientPicture,cname }) {
  return (
    <div className='cpicture'>
       <img src={clientPicture} 
            
    
className="ClientPicture"
alt="image_of_client" /> 

<h4 className='cnames'>{cname}</h4>
<hr  className="line"   style={{width:"70%",color:"blue" ,marginBottom:"10px",marginTop:"1px",marginLeft:"55px"}} /> 

</div>

   
  )
}

export default Ourclientproops