
import './pnav.css';
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
                   
                     <div class="nav-ittms">
                        <li><a  href='#hm' ><Link to="/PhamacyHome" class="p-hom-btnr" >Home</Link></a></li>
                        <li><a href='#about'><Link to="/ScanDPationQR" class="p-hom-btnr" >Scan QR</Link></a></li>
                        <li><a href='#con'><Link to="/AddDrugs" class="p-hom-btnr" >Add Drugs</Link></a></li>
                        <li><a href='#cetagory'><Link to="/DrugDetails"class="p-hom-btnr">Drugs Details</Link></a></li>
                        <li><a href='#cetagory'><Link to="/DrugReport"class="p-hom-btnr">Generate Report</Link></a></li>
                        <li><a href='#cetagory'><Link to="/DOrders"class="p-hom-btnr">Orders</Link></a></li>
                     </div>
                     
                     <div className='nv-b'>
                        <Link to={'/phamacyLogout'} className='nv-btnr'>LogOut</Link>
                     </div>

                  </nav>

            </div>
            
         </body>
      
   </div>
  )
}
