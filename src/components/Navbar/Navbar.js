import React from 'react'
import './Navbar.css'
import Logo from '../../assets/LLogo.svg'
import LOgo2 from '../../assets/logo.svg'
import Home from '../../assets/home.svg'
import About from '../../assets/about.svg'
import Service from '../../assets/services.svg'
import Contact from '../../assets/contact.svg'




function Navbar() {
  return (
    <div>
    <div className='nav-cont'>
        <div className='logo'>
         
           {/* <input type='image' src={Logo}/> */}
           <img src={Logo}/>
           
        </div>
        <div className='nav-links'>
        <ul>
            <li><a href='#home'>Home</a>/</li>
            <li><a href='#about'>About</a>/</li>
            <li><a href='#services'>Services</a>/</li>
            <li><a href='#contact'>Contact</a></li>

        </ul>
        </div>
    </div>
    <div className='hidden-menu'>
     <a href='#home'><input type={"image"} src={Home} /> </a>
     <a href='#about'> <input type={"image"} src={About}/> </a>
     <a href='#services'><input type={"image"} src={Service}/> </a>
     <a href='#contact'> <input type={"image"} src={Contact}/> </a>

      
    </div>
    </div>

  )
}

export default Navbar