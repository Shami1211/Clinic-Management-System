import React from 'react';
import './part.css';

import pation from './Photos/pation.png';
import Inventory from './Photos/Inventory.png';
import Appointments from './Photos/Appointments.png';
import Pharmacy from './Photos/Pharmacy.png';
import Laboratory from './Photos/Laboratory.png';
import doctor from './Photos/doctor.png';
import c from './Photos/c.png';
import staff from './Photos/staff.png';

export default function Part() {
  return (
    <div id="cetagory">
    <div className='hom-html' >
      <section class="hom-menu" >

        <h1 class="hom-heading"> our <span className='hom-span'>Cetagory</span> </h1>

        <div class="hom-box-container">

            <div class="hom-box8">
            <img src={pation} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Patient<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={Inventory} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Inventory<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={Appointments} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Appointments<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={Pharmacy} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Pharmacy<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={Laboratory} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Laboratory<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={doctor} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Doctor<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={c} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Clinic<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

            <div class="hom-box8">
            <img src={staff} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <h3 className='hom-h3'>Staff<br></br>Management</h3>
                <a href='/' class="hom-btn">View Details</a>
            </div>

        </div>

</section>

    </div>

    </div>
  )
}
