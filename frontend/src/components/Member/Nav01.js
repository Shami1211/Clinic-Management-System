import React from 'react';
import Icon from '../Member/MemberPhotos/Icon.png';
import { Link } from "react-router-dom";
import './Nav01.css';
//import "./MemberHeader.css"; // Import the CSS file


const MamberMain = () => {

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

                        <li><a href='/staffHome'><Link to="/staffHome" class="p-hom-btn">Home</Link></a></li>
                        <li><a href='/MemberAdd'>Add Member</a></li>
                        <li><a href='/ViewMembers'>View All</a></li>
                        <li><a href='/assign'><Link to="/assign" class="p-hom-btnr">Assign</Link></a></li>
                        <li><a href='/memberreport'><Link to="/memberreport" class="p-hom-btnr">Report</Link></a></li>
                     </div>
                     <div className='nv-b'>
                        <Link to={'/memLogout'} className='nv-btnr'>LogOut</Link>
                     </div>
                     

                  </nav>

            </div>
            
         </body>
      
   </div>
       </div>
       
    );
    
};

export default MamberMain;

/*
<div className='nv-b'>
                        <Link to={'/memberLogin'} className='nv-btn'>Login</Link>
                     </div>
*/
