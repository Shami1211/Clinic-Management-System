import React from 'react'
import Icon from '../ClinicMainH1/Photos/Icon.png';
import patient from '../img/clinic.png';
import ClinicHeaderBfrLogin from '../ClinicMainH1/ClinicHederBfrLogin';


const ClinicHome1 = () => {

  //getting current date
 

  return ( 
    <div > 

      <ClinicHeaderBfrLogin/><br/><br/>
<div className='phome-containerrr'>
      <div className='ful-logr'>
       
            <div className='full-logr'>
           
              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo" /> 
              </div>

              <h1 className='ph-h1-labr'>Clinic Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
            
            </div>

            <div className='full-logr'>

              <div class="logoor">
                <img src={patient} className="lb-lg-pr12369369" alt="signin logo"/> 
              </div>

            </div>

      </div>
    
      </div>
    </div>
  )
}

export default ClinicHome1;

