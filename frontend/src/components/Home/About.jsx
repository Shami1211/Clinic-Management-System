import React from 'react';
import './About.css';
import b3 from './Photos/b3.jpg';

export default function About() {
  return (
    <div id='about' className='about-x'>
      <br></br>
      <br></br>
    <div className='about-AboutFull' >
      
<div class="about-row">
  <div class="about-column1" >

    <img src={b3} className="about-signin" alt="signin logo"  width={"100%"} height={"400px"}/> 

  </div>

  <div class="about-column2" >
  <h1 class="about-heading"> <span className='hom-span'>About</span> us</h1>
        <p className='about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
        <p className='about-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
  </div>
</div>
    </div>
    </div>
  )
}
