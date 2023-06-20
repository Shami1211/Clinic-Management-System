import React from 'react';
import AppointmentsNav01 from '../AppointmentHome01/AppointmentNav01';
import Icon from "./Photos/Icon.png";
import appointment from "./Photos/appointment.webp";
import './AppointmentHome01.css';

const AppointmentsHome01 = () => {

  return ( 
    <div> 

      <AppointmentsNav01/><br/>  <br></br>  <br></br> 
        
        <div className='phome-containerrr'>

          <div className='ful-logr'>
                
            <div className='full-logr'>
                  
               

                  <div className='h-1-phtooi'>
                    <img src={Icon} className="h-1-p2" alt="signin logo" /> 
                  </div>

                  <h1 className='ph-h1-labr'>Appointments Management</h1>
                  <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
                
            </div>

            <div className='full-logr'>

              <div class="logoor">
                <img src={appointment} className="lb-lg-pr123695" alt="signin logo"/> 
              </div>

            </div>

          </div>

        </div>

    </div>

  )
}

export default AppointmentsHome01;

