import React from 'react'
import './Services.css'
import Coding from '../../assets/coding.svg'
import Design from '../../assets/design.svg'
import Marketing from '../../assets/marketing.svg'
function Services() {
  return (
   <div className='services-cont'>
     <div className='services-title'>
       <h1>What I do </h1>
      
     </div>
     <div className='div-cont'>
       <div className='services-div'>
      <img src={Design}/>
      <h1>Product Design</h1>
      <p>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
       </div>
       <div className='services-div'>
      <img src={Coding}/>
      <h1>Website Development</h1>
      <p>I use various web technologies to develop attractive websites which convert visitors to customers. I develop creative and responsive websites layouts.</p>
       </div>
       <div className='services-div'>
      <img src={Marketing}/>
      <h1>Digital Marketing</h1>
      <p>I identify and evaluate new digital technologies and use web analytics tools to measure site traffic to better-optimize marketing campaigns.</p>
       </div>
       </div>
   </div>
  )
}

export default Services