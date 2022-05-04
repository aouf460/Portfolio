import React from 'react'
import './Home.css'
import Port from '../../assets/(aouf.dev)portfolio.png'
function Home() {
  return (
    <div className='home-cont'>
        <div className='hero-text'>
        <h1>HELLO 👋 <br/>I'M</h1>
        <h2>OMAR <br/> AOUF</h2>
       <h3>Software Developer </h3>
       <a href='#contact'>Hire Me</a>
        </div>
        <div className='hero-image'>
       <img src={Port}/>
       </div>
    </div>
  )
}

export default Home