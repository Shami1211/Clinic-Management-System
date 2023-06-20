import React from 'react';
import PNav from '../Phamacy_Home_01/PNav1';
import Icon from "./Photos/Icon.png";
import pharmacy from "./Photos/pharmacy.png";
import './PhamacyHome1.css'

const PhamacyHome1 = () => {

  return ( 
    <div>

       <PNav/><br/> <br></br><br></br>
       
        <div className='phome-containerrr'> 

          <div className='ful-logr'>

            <div className='full-logr'>
              
              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo"/> 
              </div>

                    <br></br>

              <h1 className='ph-h1-labr'>Pharmacy Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha</h1>

            </div>

            <div className='full-logr'>
              
              <div class="logoor">
                <img src={pharmacy} className="lb-lg-pr123" alt="signin logo"/> 
              </div>

                <br></br>

            </div>

          </div>

        </div>
        
    </div>

  )
}

export default PhamacyHome1;

