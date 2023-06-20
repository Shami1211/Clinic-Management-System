import React from 'react';
import './nav.css';
import Icon from './Photos/Icon.png';

export default function Nav() {
  return (
    <div className='a'>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <body>
        
            <div className='all'>
               
                  <nav>

                     <div class="menu-icon">
                        <span class="fas fa-bars"></span>
                     </div>

                     <div class="logo">
                        <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
                     </div>

                     <div class="nav-items">
                        <li><a href='/'>Home</a></li>
                        <li><a href='#cetagory'>Cetagory</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#con'>Contact Us</a></li>
                     </div>

                     <div class="search-icon">
                        <span class="fas fa-search"></span>
                     </div>

                     <div class="cancel-icon">
                        <span class="fas fa-times"></span>
                     </div>

                     <div class ="s">
                        <form action="#">
                           <input type="search" class="search-data" placeholder="Search" required></input>
                           <button type="submit" class="fas fa-search"></button>
                        </form>
                     </div>
                  </nav>

            </div>
            
         </body>
      
   </div>
  )
}
