import React from 'react';
import Nav from './Nav';
import Slide from '../Home/Slide';
import Part from '../Home/Part';
import About from '../Home/About';
import ConUs from '../Home/ConUs';


export default function MainHome() {
  return (
    <div>
        <Nav></Nav>
        <Slide></Slide>
        <Part></Part>
        <About></About>
        <ConUs></ConUs>

    </div>

  )
}
