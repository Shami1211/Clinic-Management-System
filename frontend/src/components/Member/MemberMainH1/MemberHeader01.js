import React from 'react';
import Icon from './Photos/Icon.png';
import {Link} from 'react-router-dom';


const MemberHeader01 = () =>
{

    return (
        <div className='a'>
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    
             <body>
            
                <div className='all'>
                    
                      <nav>
    
                         <div class="menu-icon">
                            <span class="fas fa-bars"></span>
                         </div>
    
                         <div class="logopt">
                            <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
                         </div>
    
                         <div class="nav-itms">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/scanmemberqr'>ScanQR</a></li>

                         </div>
                         <div className='nv-b'>
                        <Link to={'/memberlogin'} className='nv-btn'>Login</Link>
                     </div>

                      </nav>
    
                </div>
                
             </body>
          
       </div>
      )

}

export default MemberHeader01;