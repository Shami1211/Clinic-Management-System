
import Icon from './Photos/Icon.png';
import { Link } from "react-router-dom";
export default function Nav() {


  return (
    <div className='a'>
      
      <link rel="stylesheet" href="https://cdnjs .cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <body>
        
            <div className='all'>
               
                  <nav>

                     <div class="logopt">
                        <img src={Icon} className="signin" alt="signin logo"  width={"9%"}/> 
                     </div>

                     <div class="nav-itmsap">
                        <li><a href='#hm' >Home</a></li>
                        <li><a href='#about'>Appointments</a></li>
                        <li><a href='#con'>Scan Qr Code</a></li>
                        <li><a href='#cetagory'>Add Appointments</a></li>
                        <li><a href='#cetagory'>Requests</a></li>
                        <li><a href='#cetagory'>Generate Report</a></li>
                     </div>

                     <div className='nv-b'>
                        <Link to={'/AppointmentsLogin'} className='nv-btn'>Login</Link>
                     </div>

                  </nav>

            </div>
            
         </body>
      
   </div>
  )
}
