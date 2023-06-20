import React from 'react';
import {Link} from 'react-router-dom';
import "./DoctorMainHeader.css"
import Icon from '../Doctor/Photos/Icon.png';

//doctor header
const DoctorHeader = () => {
 
  return (
    <div>

<div className='a'>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <body>
        
            <div className='all'>
               
                  <nav>


                     <div class="logopt">
                        <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
                     </div>
                     <div class="nav-ittms">
                        <li><a href='#catagory'><Link to="/doctorsViewProfile" class="p-hom-btn" >View Profile</Link></a></li>
                        <li><a href='#about'><Link to="/dailyReport" class="p-hom-btn" >Daily Report</Link></a></li>
                        <li><a href='#con'><Link to="/scanQrDoc" class="p-hom-btn" >Scan QR</Link></a></li>&nbsp;&nbsp;&nbsp;
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

export default DoctorHeader;

//sx={{ml:"auto"}} right side ekt ynne