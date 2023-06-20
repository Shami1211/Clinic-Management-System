import './pnav1.css';
import Icon from '../Phamacy_Home_02/Photos/Icon.png';
import { Link } from "react-router-dom";
export default function Nav() {


  return (
    <div className='a'>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <body>
        
            <div className='all'>
               
                  <nav>

                     <div class="logopt">
                        <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
                     </div>

                     <div className='nv-b'>
                        <Link to={'/phamacyLogin'} className='nv-btn'>Login</Link>
                     </div>

                  </nav>

            </div>
            
         </body>
      
   </div>
  )
}
