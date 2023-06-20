import React from 'react';
import Icon from '../Clinics/ClinicMainH1/Photos/Icon.png';
import {Link} from 'react-router-dom';


const ClinicHeader = () =>
{



   //const current = new Date();
   //const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;
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
                           <li><a href='/'><Link to="/chhh" class="p-hom-btnr">Home</Link></a></li>
                            <li><a href='/'><Link to="/clinic/viewClinics" class="p-hom-btnr">View Clinics</Link></a></li>
                            <li><a href='#cetagory'><Link to="/clinic/getReports" class="p-hom-btnr">Generate Report</Link></a></li>
                            <li><a href='#about'><Link to="/clinic/todaysSchedule" class="p-hom-btnr">Today's Schedule</Link></a></li>
                         </div>
                         <div className='nv-b'>
                        <Link to={'/clinLogout'} className='nv-btnr'>LogOut</Link>
                     </div>

                      </nav>
    
                </div>
                
             </body>
          
       </div>
      )

}

export default ClinicHeader;