import React from 'react'
import ReceptionHeader01 from './ReceptionHeader01';
import './PatientHome1.css'
import Icon from '../Photos/Icon.png';
import patient from '../Photos/pat1.png';

const PatientHome1 = () => {

  //getting current date


  return ( 
    <div > 
      <div>

        <ReceptionHeader01/><br/> <br></br><br></br>

        <div className='phome-containerrr'> 

          <div className='ful-logr'>
            
            <div className='full-logr'>
            

              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo"  /> 
              </div>

              

              <h1 className='ph-h1-labr'>Patient Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
          
            </div>

            <div className='full-logr'>
            
              <div class="logoor">
                <img src={patient} className="lb-lg-pr12369" alt="signin logo"/> 
              </div>

                <br></br>

            </div>

          </div>

        </div>
        
</div>



    </div>

    
  )
}

export default PatientHome1;

