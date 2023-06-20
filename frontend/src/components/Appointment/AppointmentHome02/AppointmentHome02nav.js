
import './AppointmentHome02nav.css';
import Icon from './Photos/Icon.png';
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
                   
                     <div class="nav-ittmsr">
                        <li><a href='#hm' ><Link to="/AppointmentsHome" class="p-hom-btnr" >Home</Link></a></li>
                        <li><a href='#about'><Link to="/appointments" class="p-hom-btnr" >Appointments</Link></a></li>
                        <li><a href='#con'><Link to="/scanqrappointment" class="p-hom-btnr" >Scan Qr</Link></a></li>
                        <li><a href='#cetagory'><Link to="/add"class="p-hom-btnr">Add Appointments</Link></a></li>
                        <li><a href='#cetagory'><Link to="/requests"class="p-hom-btnr">Requests</Link></a></li>
                        <li><a href='#cetagory'><Link to="/report"class="p-hom-btnr">Generate Report</Link></a></li>
                     </div>

                     <div className='nv-b'>
                        <Link to={'/AppointmentsLogout'} className='nv-btnr'>LogOut</Link>
                     </div>

                  </nav>

            </div>
            
         </body>
      
   </div>
  )
}
