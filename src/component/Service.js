import React from 'react'
 import ServiceProp from './ServiceProp'
import "./service.css"


function Service() {
  return (
    <div className='ourservicesection'>      
        <h3 className='sname'>Major Services</h3>

    <div className='grid'>
      <ServiceProp  image={require('./image/s3.jpg')}   
      heading="BULIDING CONSTRUCTION" 
       description="Construction of roads involves the paving, 
       rehabilitation, and/or clamation of degraded pavements 
       in order to achieve a state of good repair and increase road traffic safety. "/>

      <ServiceProp image={require('./image/s2.jpg')} 
      heading="ROAD CONSTRUCTION" 
       description="Construction of roads involves the paving, 
       rehabilitation, and/or clamation of degraded pavements 
       in order to achieve a state of good repair and increase road traffic safety. "/>

      <ServiceProp  image={require('./image/s1.jpg')}   
      heading="MINING" 
      description="Construction of roads involves the paving, 
       rehabilitation, and/or clamation of degraded pavements in order to achieve a state of
        good repair and increase road traffic safety."/>

      <ServiceProp image={require('./image/s5.jpg')}   
       heading="IRRIGATION" 
      description="Construction of roads involves the paving, 
       rehabilitation, and/or clamation of degraded pavements in order to achieve a state of
        good repair and increase road traffic safety."/>

      <ServiceProp image={require('./image/s4.jpg')}   
       heading="HYDROPOWER" 
      description="Construction of roads involves the paving, 
       rehabilitation, and/or clamation of degraded pavements in order to achieve a state of
        good repair and increase road traffic safety."/>

      <ServiceProp  image={require('./image/s6.jpg')}   
         heading="BRIDGE CONSTRUCTION"
      description="Construction of roads involves the paving, 
       rehabilitation, and/or clamation of degraded pavements in order to achieve a state of
        good repair and increase road traffic safety." />
    </div>
    </div>
    
  )
}

export default Service