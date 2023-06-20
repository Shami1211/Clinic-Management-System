import React from 'react'
import {useNavigate} from 'react-router-dom'
import './clinicHome.css'
import Icon from '../Clinics/ClinicMainH1/Photos/Icon.png'
//import clinicImage from '../Clinics/img/clinic.jpg'
import clinicIcon from '../Clinics/img/clinicIcon.png'
import graphIcon from '../Clinics/img/graphIcon.png';
import timetableIcon from '../Clinics/img/timetableIcon.png';
import clinic from '../Clinics/img/clinic.png';
import ClinicHeader from '../Clinics/ClinicHeader';

const ClinicHome = ()=> {

    const navigate = useNavigate();

    const toClinicView = ()=>{
        console.log("Clicked on view clinics")
        navigate('/clinic/viewClinics')
    }

    const toGetReports = ()=>{
        console.log("Clicked on get reports")
        navigate("/clinic/getReports")
    }

    const toSchedule = ()=>{
        console.log("Clicked on schedule")
        navigate("/clinic/todaysSchedule") 

    }
  return (
    
<div>
<ClinicHeader/><br/><br/>
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
                <img src={clinic} className="lb-lg-pr123" alt="signin logo"/> 
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
                <img  src={clinicIcon} alt="clinic icon" width={"80%"}></img>
               
                <button className='hom-btn-pa' onClick={toClinicView}>View Clinic</button><br/><br/>
            </div>

            <div class="hom-box8">
            <img src={graphIcon} alt="graph icon"  width={"80%"}/> 
               
                <button className='hom-btn-pa' onClick={toGetReports} >Get Report</button><br/><br/>
            </div>

            <div class="hom-box8">
            <img src={timetableIcon} alt="timetable icon"  width={"80%"}/> 
              
                <button className='hom-btn-pa' color='white' onClick={toSchedule}>Today's Schedule</button><br/><br/> 
            </div>

            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  )
}

export default ClinicHome;

/*

<div  className='clinicImage'>
            <img src={clinicImage} alt="Vector of a clinic"></img>
        </div>

        <div className='menuItems'>
            <div className='menuCard' onClick={toClinicView}>
                <img src={clinicIcon} alt="clinic icon"></img>
                <h1>VIEW</h1>
                <h1>CLINICS</h1>
            </div>
            <div className='menuCard' onClick={toGetReports}>
            <img src={graphIcon} alt="graph icon"></img>
                <h1>GET</h1>
                <h1>REPORTS</h1>
            </div>
            <div className='menuCard' onClick={toSchedule}>
            <img src={timetableIcon} alt="timetable icon"></img>
                <h1>TODAY'S</h1>
                <h1>SCHEDULE</h1>
            </div>
        </div>

*/