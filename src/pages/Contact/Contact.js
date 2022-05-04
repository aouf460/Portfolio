import React from 'react'
import './Contact.css'
import Location from '../../assets/location.svg'
import Mail from '../../assets/mail.svg'
import Phone from '../../assets/phone.svg'
import Logo from '../../assets/blogo.svg'
import fav from '../../assets/favicon.ico'
import Wp from '../../assets/whatsapp.svg'
import Linked from '../../assets/linkedin.svg'
import Insta from '../../assets/instagram.svg'


function Contact() {
  return (
    <div>
    <div className='contact-cont'>
      <div className='contact-info'>
        <div className='flex'>
      <img src={Location}/>
      <h3>United Arab Emirates</h3>
      </div>
      <div className='flex'>
      <img src={Mail}/>
   <a href='mailto:aouf460@gmail.com'><h3>aouf460@gmail.com</h3></a>
      </div>
      <div className='flex'>
      <img src={Phone}/>
      <a href='tel:+971581292370'><h3>+971 (0) 581 292 370</h3></a>
      </div>
      </div>
      {/* <div className='contact-mail'>
      <input type={"text"} placeholder='First Name' className='name' />
      <input type={"text"} placeholder='Last Name' className='name' />
      <input type={"email"} placeholder='Email' className='email'/>
      </div> */}
    </div>
    <div className='footer'>
{/* <input type={'image'} src={Logo} ></input> */}
<a href='#home'><input type={"image"} src={Logo} /> </a>

<div className='copyright'>
  <h3>© Copyright 2021. All rights reserved</h3>
</div>
<div className='icons'>
<a href=''><input type={'image'} src={Wp}/></a>
<a href='https://www.linkedin.com/in/omar-aouf-aa03b4211'><input type={'image'} src={Linked}/></a>
<a href='https://www.instagram.com/aouf.dev/'><input type={'image'} src={Insta}/></a>

</div>

    </div>
    </div>
  )
}

export default Contact