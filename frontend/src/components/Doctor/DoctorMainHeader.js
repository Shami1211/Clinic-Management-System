//main header
import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '../Doctor/Photos/Icon.png';
import "./DoctorMainHeader.css";

const DoctorMainHeader = () => {
  return (
    <div>

<div className='a'>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <body>
        
            <div className='all'>
               
                  <nav>

                     <div class="logopt">
                        <img src={Icon}  alt="signin logo"  width={"14%"}/> 
                     </div>



                     <div className='nv-b1r'>
                        <Link to={'/doctorLogin'} className='nv-btn-doc1'>Doctor Login</Link>
                     </div>
                     <div className='nv-b'>
                        <Link to={'/docAdminLogin'} className='nv-btn-doc1'>Admin Login</Link>
                     </div>
                  </nav>

            </div>
            
         </body>
      
   </div>

       
                    
                    
                   
                    

    </div>
  )
};

export default DoctorMainHeader;

