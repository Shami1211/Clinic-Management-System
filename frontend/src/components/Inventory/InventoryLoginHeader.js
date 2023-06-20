import React from 'react';
import {Link} from 'react-router-dom';
import emblem from '../Inventory/Photos/emblem.png';
import "./InventoryLoginHeader.css";

const InventoryLoginHeader = () => {
  return (
   <div>

      <div className='hem-a'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
         <body>
            <div className='hem-all'>
                  <nav>
                     <div class="hem-logo">
                        <img src={emblem} alt="logo"  width={"14%"}/> 
                     </div>

                     <div className='hem-nv-b'>
                        <Link to={'/InventoryLogin'} className='hem-nv-btn-doc1'>Admin Login</Link>
                     </div>
                  </nav>
            </div>
         </body>   
      </div>        

   </div>
  )
};

export default InventoryLoginHeader;