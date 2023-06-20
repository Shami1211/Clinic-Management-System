import React from 'react';
import AppointmentsNav01 from './PationNav01';
import Icon from "./Photos/Icon.png";
import pat1 from "./Photos/pat1.png";

const AppointmentsHome01 = () => {


  return ( 
    <div className='phome-container'> 

      <AppointmentsNav01/> <br/> <br></br>

      <div className='ful-log'>
            
            <div className='full-log'>
              
            <br></br>  <br></br>  <br></br>

              <div className='h-1-phtoo'>
                <img src={Icon} className="h-1-p" alt="signin logo" /> 
              </div>

              <h1 className='ph-h1-lab'>Patient Management</h1>
              <h1 className='ph-h1-lab'>District General Hospital Gampaha </h1>
            
            </div>

            <div className='full-log'>

              <div class="logoo">
                <img src={pat1} className="lb-lg-pr1" alt="signin logo"/> 
              </div>

            </div>

      </div>



</div>

  )
}

export default AppointmentsHome01;

