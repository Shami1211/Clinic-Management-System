import React from 'react';
import './Styles/PatientNav.css';
import Icon from './Photos/Icon.png';
import {Link} from 'react-router-dom';


const ReceptionHeader = () =>
{
   const current = new Date();
   const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;
    return (
        <div className='a'>
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    
             <body>
            
                <div className='all'>
                   
                      <nav>
   
    
                         <div class="logopt">
                            <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
                         </div>
    
                         <div class="nav-ittms">
                            <li><a href='hh'><Link to="/patientHome1">Home</Link></a></li>
                            <li><a href='#cetagory'><Link to="/addPatient">Add Patient</Link></a></li>
                            <li><a href='#about'><Link to="/viewPatients">View All Patients</Link></a></li>
                            <li><a href='#con'><Link to={`/viewPatients/${date}`}>Generate Report</Link></a></li>
                         </div>


                         <div className='nv-b'>
                        <Link to={'/patiLogout'} className='nv-btnr'>LogOut</Link>
                     </div>


                      </nav>
    
                </div>
                
             </body>
          
       </div>
      )

}

export default ReceptionHeader;
