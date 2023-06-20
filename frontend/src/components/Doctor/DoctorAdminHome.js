import React  from "react";
import {Link} from 'react-router-dom';
import "./DoctorAdminHome.css";
import Icon from '../Doctor/Photos/Icon.png';
import docadmin from '../Doctor/Photos/docadmin.png';
import DocAdminHeader from './DocAdminHeader';
import adddoctor from '../Doctor/Photos/adddoctor.png';
import viewdoc from '../Doctor/Photos/viewdoc.png';

//admin home page
const DoctorAdminHome = () => {
    return (
    <div>
      <DocAdminHeader/><br/><br/>

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
          <img src={docadmin} className="lb-lg-pr123" alt="signin logo"/> 
        </div>

      </div>

</div>
</div>

<div className='phome-ball'>
        <div className='phome-Main'>

          <div class="hom-htmlr">

            <div className='hom-menu-pa'>
              <h1 class="hom-heading">  <span className='hom-span'>Our Services</span> </h1>
                <div className='hom-box-container'>
               
                <div class="hom-box8">
                <br></br>
                <img src={adddoctor} className="hom-img" alt="signin logo"  width={"10%"}/>
                    <Link className='hom-btn-pa' color='white' to={`/addDoctor`}>Add Doctor</Link><br/><br/> 
                </div>

                <div class="hom-box8">
                <br></br>
                <img src={viewdoc} className="hom-img" alt="signin logo"  width={"8%"}/> 
                    <Link className='hom-btn-pa' to={`/viewDoctors`}>View Doctors</Link><br/><br/>
                </div>

            <br></br>

                </div>
            </div>
          </div>
        </div>
      </div>

      
</div>
);
};

export default DoctorAdminHome;

