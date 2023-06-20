import React from 'react';
import './About.css';
import newhospital from './Photos/newhospital.jpg';

function About() {
  return (
    <div id='about' className='about-x'>
      <br></br>
      <br></br>
    <div className='about-AboutFull' >
      
<div class="about-row">
  <div class="about-column1" >

    <img src={newhospital} className="about-signin" alt="signin logo"  width={"100%"} height={"400px"}/> 

  </div>

  <div class="about-column2" >
  <h1 class="about-heading"> <span className='hom-span'>About</span> us</h1>
        <p className='about-p'>We provide a home for thousands of patients from all over the country who do not have the privilege to afford the comfort of a private hospital. Our leading team of professionals, doctors and medical staff have proudly contributed to our success story with consecutive nominations as the best state hospital in Sri lanka over the years. We will continue to thrive as a leading state hospital in Sri Lanka while providing our best to the local community.</p>
  </div>
</div>
    </div>
    </div>
  )
}

export default About;