import Icon from '../Member/MemberPhotos/Icon.png';
import { Link } from "react-router-dom";
import './Nav01.css'
//import "./MemberHeader.css"; // Import the CSS file


const MamberMainHeader = () => {

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
                        <li><a href='/scanmemberqr'><Link to="/scanmemberqr" class="p-hom-btn">Scan QR</Link></a></li>
                     </div>

                     <div className='nv-b'>
                        <Link to={'/memberlogin'} className='nv-btn'>Login</Link>
                     </div>

                  </nav>

            </div>
            
         </body>
      
   </div>
   
       
    );
    
};

export default MamberMainHeader;
