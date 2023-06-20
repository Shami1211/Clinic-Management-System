import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/PatientHomeForReception.css'
import ReceptionHeader from '../Patient/ReceptionHeader'
import Icon from '../Patient/Photos/Icon.png';
import patient from '../Patient/Photos/pat1.png';
import addp from '../Patient/Photos/addp.png';
import wiewp from '../Patient/Photos/wiewp.webp';
import scan from '../Patient/Photos/scnqr.png';
import gen from '../Patient/Photos/gen.png';

const PatientHome = () => {

  //getting current date
  const current = new Date();
  const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;


  return ( 
    <div className='phome-container'> 

<div>

<ReceptionHeader/><br/> <br></br><br></br>

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
    
          <div className='phome-ball'>
            <div className='phome-Main'>

              <div class="hom-html">

            <div className='hom-menu-pa'>
            <h1 class="hom-headingr">  SYSTEM SERVICES</h1>
                <div className='hom-box-container'>

                <div class="hom-box8">
            <img src={addp}  alt="signin logo"  width={"80%"}/> 
                
                <Link className='hom-btn-pa' to={`/addPatient`}>Add Patient</Link><br/><br/>
            </div>

            <div class="hom-box8">
            <img src={wiewp}  alt="signin logo"  width={"80%"}/> 
                
                <Link className='hom-btn-pa' to={`/viewPatients`}>View All Patients</Link><br/><br/>
            </div>

            <div class="hom-box8">
            <img src={scan}  alt="signin logo"  width={"85%"}/> 
                
                <Link className='hom-btn-pa' color='white' to={`/scanQrRec`}>Scan QR</Link><br/><br/> 
            </div>

            <div class="hom-box8">
            <img src={gen}  alt="signin logo"  width={"80%"}/> 
             
                <Link className='hom-btn-pa' to={`/ViewPatients/${date}`}>Generate Report</Link><br/><br/>
            </div>


                    </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PatientHome;

