import React from 'react';
import './nav.css';
import emblem from './Photos/emblem.png';

export default function Nav() {
  return (
    <div className='main-nav-a'>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <body>
        
            <div className='main-nav-all'>
               
                  <nav className='main-nav-nav'>

                     <div class="menu-icon">
                        <span class="fas fa-bars"></span>
                     </div>

                     <div class="logohome">
                        <img  src={emblem} className="signin" alt="signin logo"/> 
                     </div>

                     <div class="nav-items">
                        <li><a href='#hm'>Home</a></li>
                        <li><a href='#cetagory'>Categories</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#con'>Contact Us</a></li>
                     </div>

                  </nav>

            </div>
            
         </body>
      
   </div>
  )
}
