import React from 'react'
import  "./Ourprocess.css"
import Ourprocessproops from './Ourprocessproops'


function Ourprocess() {
  return (
    <div className='ourprocesscss'>
        <h1 className='pname'> Our Process</h1>
    <div className='pgrid'>
         <Ourprocessproops  image={require('./image/p1.jpg')}   
      heading="Meeting" 
       description="meet with
       our clients to discuss 
       their ideas and find a 
       solution.  "/>

<Ourprocessproops image={require('./image/p2.jpg')}    
      heading="Design" 
       description="Designing the task according to  the demand and need of the client."/>


       <Ourprocessproops  image={require('./image/p3.jpg')}   
      heading="Develop" 
       description=" Developing the product according to the demand of the 
       client.  "/>


       <Ourprocessproops   image={require('./image/p4.jpg')}
      heading="Deliver" 
       description="Delivering the best and quality product. "/>
    </div>
    </div>
  )
}

export default Ourprocess