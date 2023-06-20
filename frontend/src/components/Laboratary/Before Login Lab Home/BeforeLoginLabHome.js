import React from 'react';
import LabBeforeLogNav from '../Before Login Lab Home/LabBeforeLogNav';
import Icon from "../CSS/photos/Icon.png";
import labmana from "../CSS/photos/nv.png";

const BeforeLoginLabHome = () => {


  return ( 
    <div > 
      <LabBeforeLogNav/><br/> <br></br>
        <div className='phome-containerrr'>
          
          <div className='ful-logr'>
                
            <div className='full-logr'>
          
              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo" /> 
              </div>

              <h1 className='ph-h1-labr'>Laboratary Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
                
            </div>

            <div className='full-logr'>
        
              <div class="logoor">
                    <img src={labmana} className="lb-lg-pr12369" alt="signin logo"/> 
              </div>

            </div>

          </div>

      </div>

</div>

  )
}

export default BeforeLoginLabHome;

