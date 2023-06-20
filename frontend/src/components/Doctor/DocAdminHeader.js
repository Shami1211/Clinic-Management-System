import React, {  } from 'react';
import {Link} from 'react-router-dom';
import "./DoctorMainHeader.css";
import Icon from '../Doctor/Photos/Icon.png';

//Admin header
const DocAdminHeader = () => {
    
    return (
        <div>
    
    <div className='a'>
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    
             <body>
            
                <div className='all'>
                   
                      <nav>
    

    
                         <div class="logopt">
                            <img src={Icon} className="signin" alt="signin logo"  width={"14%"}/> 
                         </div>

                         <div class="nav-ittms">
                            <li><a href='#hm'><Link to="/homeAdmin" class="p-hom-btnr">Home</Link></a></li>
                            <li><a href='#catagory'><Link to="/addDoctor" class="p-hom-btnr">Add Doctor</Link></a></li>
                            <li><a href='#about'><Link to="/viewDoctors" class="p-hom-btnr">View Doctors</Link></a></li>
                         </div>

                        <div className='nv-b'>
                           <Link to={'/docHome'} className='nv-btnr'>LogOut</Link>
                        </div>

                        
                      </nav>
    
                </div>
                
             </body>
          
       </div>
        </div>
      )
    };
    

export default DocAdminHeader;

