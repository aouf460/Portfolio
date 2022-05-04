import React from 'react'
import './About.css'
import Omar from '../../assets/omar.png'
function About() {
  return (
    <div className='about-cont'>
       <div className='about-text'>
      <h1>Who I am</h1>
      <p>My name is Omar Aouf. I have graduated in February 22 after completing a BSc. in Computer Science from Beirut Arab University (Class ’19).
Highly interested and looking to build a career in App and Software Development. I excel in Web Development as I currently design and operate websites on a freelance basis.<br/>
I have cultivated my skills while undertaking my degree by participating in web and blockchain talks, learning new languages and taking part in internships. Take a look at my 
{/* <a href="../../assets/Omar's-Resume.pdf" download>CV</a> */}
<a
        href="https://drive.google.com/file/d/1JdCI5TCtmLMXnzXtk-jEgsaBjtqInTYM/view?usp=sharing"
        download
      > CV</a>
.
      </p>
    </div>
      <div className='about-img'>
        <img src={Omar}/>
      </div>
     
    </div>
  )
}

export default About