//main home page
import { } from '@mui/material';
import React from "react";
import './DoctorHome.css';
import DoctorMainHeader from './DoctorMainHeader';
import Icon from '../Doctor/Photos/Icon.png';
import docmain1 from '../Doctor/Photos/docmain1.png';


const Home = () => {
  return (
      <div > 
        <DoctorMainHeader/><br/><br/>
        
<div className='phome-containerrr'>
<div className='ful-logr'>
      
      <div className='full-logr'>
  
        <div className='h-1-phtooi'>
          <img src={Icon} className="h-1-p2" alt="signin logo" /> 
        </div>

        <h1 className='ph-h1-labr'>Doctor Management</h1>
        <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
      
      </div>

      <div className='full-logr'>

        <div class="logoor">
          <img src={docmain1} className="lb-lg-pr123" alt="signin logo"/> 
        </div>

      </div>

</div>
</div>
          </div>

  );
};

export default Home;
