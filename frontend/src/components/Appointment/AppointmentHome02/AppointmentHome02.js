import React from 'react';
import {Link} from 'react-router-dom';
import './AppointmentHome02.css';
import AppointmentHome02nav from './AppointmentHome02nav';
import Icon from "./Photos/Icon.png";
import appointment from "./Photos/appointment.webp";
import scnqr from './Photos/scnqr.png';
import add from './Photos/add.jpg';
import Appointments from './Photos/Appointments01.png';
import Requests from './Photos/Requests.png';
import report from './Photos/report.png';
const PhamacyHome = () => {

  return ( 
    <div > 
      <div className='phome-container'>

      <AppointmentHome02nav/><br/><br/>

        

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
    
          <div className='phome-ball'>
            
            <div className='phome-Main'>

              <div class="hom-html">

                <div className='hom-menu-palab'>

                  <h1 class="hom-headingr">SYSTEM SERVICES</h1>

                    <div className='hom-box-container'>
                  
                      <div class="hom-box8">
                     
                      <img src={Appointments}  alt="signin logo"  width={"80%"}/> 
                          <Link className='hom-btn-pa' color='white' to={`/appointments`}>Appointments</Link><br/><br/> 
                      </div>

                      <div class="hom-box8">
                     
                      <img src={scnqr}  alt="signin logo"  width={"80%"}/>
                          <Link className='hom-btn-pa' to={`/scanqrappointment`}>Scan Qr Code</Link><br/><br/>
                      </div>

                      <div class="hom-box8">
                     
                      <img src={add}  alt="signin logo"  width={"80%"}/> 
                          <Link className='hom-btn-pa' to={`/addappointment`}>Add Appointments</Link><br/><br/>
                      </div>


                      <div class="hom-box8">
                     
                      <img src={Requests}  alt="signin logo"  width={"80%"}/> 
                          <Link className='hom-btn-pa' to={`/requests`}>Requests</Link><br/><br/>
                      </div>


                      <div class="hom-box8">
                     
                      <img src={report}  alt="signin logo"  width={"80%"}/> 
                          <Link className='hom-btn-pa' to={`/report`}>Generate Report</Link><br/><br/>
                      </div>

                              <br></br>

                    </div>
    <br></br>
                </div>

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default PhamacyHome;

