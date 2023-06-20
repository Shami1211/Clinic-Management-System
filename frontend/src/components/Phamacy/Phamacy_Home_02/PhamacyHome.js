import React from 'react';
import {Link} from 'react-router-dom';
import '../Phamacy_Home_02/PhamacyHome.css';
import PNav from '../Phamacy_Home_02/PNav';
import Icon from "../Phamacy_Home_02/Photos/Icon.png";
import pharmacy from "./Photos/pharmacy.png";
import adddrug from '../Phamacy_Home_02/Photos/adddrug.png';
import detail from '../Phamacy_Home_02/Photos/detail.png';
import scnqr from '../Phamacy_Home_02/Photos/scnqr.png';
import report from '../Phamacy_Home_02/Photos/report.png';
const PhamacyHome = () => {

  return ( 
    <div>

      <PNav/><br/> <br></br><br></br>

        <div className='phome-containerrr'> 

          <div className='ful-logr'>
                
            <div className='full-logr'>
                
              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo" /> 
              </div>

              <h1 className='ph-h1-labr'>Pharmacy Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
                
            </div>

            <div className='full-logr'>

              <div class="logoor">
                <img src={pharmacy} className="lb-lg-pr123" alt="signin logo"/> 
              </div>

            </div>

          </div>

        </div>
    
        <div className='phome-ball'>

          <div className='phome-Main'>

            <div class="hom-html">

              <div className='hom-menu-palab'>

                <h1 class="hom-headingr">SYSTEM SERVICES</h1>

                  <div className='hom-box-container'>
                
                  <div class="hom-box8">
                    <img src={scnqr}  alt="signin logo"  width={"80%"}/> 
                    <Link className='hom-btn-pa' color='white' to={`/ScanDPationQR`}>Scan QR</Link><br/><br/> 
                  </div>

                  <div class="hom-box8">
                    <img src={adddrug}  alt="signin logo"  width={"78%"}/>
                    <Link className='hom-btn-pa' to={`/AddDrugs`}>Add Drugs</Link><br/><br/>
                  </div>

                  <div class="hom-box8">
                    <img src={detail}  alt="signin logo"  width={"78%"}/> 
                    <Link className='hom-btn-pa' to={`/DrugDetails`}>Drugs Details</Link><br/><br/>
                  </div>


                  <div class="hom-box8">
                    <img src={report}  alt="signin logo"  width={"78%"}/> 
                    <Link className='hom-btn-pa' to={`/DrugReport`}>Generate Report</Link><br/><br/>
                  </div>

                </div>

              </div>

            </div>
            
          </div>
          
        </div>

    </div>
  )
}

export default PhamacyHome;

