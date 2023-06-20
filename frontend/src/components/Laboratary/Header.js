import React from "react";
import Icon from './CSS/photos/Icon.png';
import './CSS/Header.css';
import {Link} from 'react-router-dom';

const LaboratoryHeader = () => {

  return (
    <div className='a'>
      
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    
       <body>
      
          <div className="all">
             
            <nav>
    
               <div class="logopt">
                  <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
               </div>
                  
               <div class="nav-ittms">
                  <li><a href='/'><Link to="/labMainHome">Home</Link></a></li>
                  <li><a href='#cetagory'><Link to="/labscan">Scan QR</Link></a></li>
                 
                  <li><a href='#con'><Link to="/labreports">Tests</Link></a></li>
                  <li><a href='#con'><Link to="/labothers">Others</Link></a></li>
               </div>

               <div className='nv-b'>
                        <Link to={'/labLogout'} className='nv-btnr'>LogOut</Link>
                     </div>
                     
                </nav>
    
          </div>
          
       </body>
    
    </div>
  );
};

export default LaboratoryHeader;

