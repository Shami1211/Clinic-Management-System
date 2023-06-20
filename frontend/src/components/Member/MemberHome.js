import React from 'react'
import {Link} from 'react-router-dom'
import '../Member/MemberHome.css'
import MemberHeader from '../Member/Nav01'
import Icon from '../Member/MemberPhotos/Icon.png';
import mm from './MemberMainH1/Photos/mm.png'
import addp from '../Member/MemberPhotos/addp.png';
import viewm from '../Member/MemberPhotos/viewm.jpg';
import scanqr from '../Member/MemberPhotos/scnqr.png';
import gen from '../Member/MemberPhotos/gen.png';

const MemberHome = () => {

  
  return ( 
    <div className='phome-container'> 

      <MemberHeader/><br/><br/>

      <div className='ful-logr'>
            
            <div className='full-logr'>
        
              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo" /> 
              </div>

              <h1 className='ph-h1-labr'>Staff Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
            
            </div>

            <div className='full-logr'>

              <div class="logoor">
                <img src={mm} className="lb-lg-pr000" alt="signin logo"/> 
              </div>

            </div>

      </div>
    
      <div className='phome-ball'>
        <div className='phome-Main'>

          <div class="hom-html">

            <div className='hom-menu-palab'>
            <h1 class="hom-headingr">  SYSTEM SERVICES</h1>
                <div className='hom-box-container'>

                <div class="hom-box8">
            <img src={addp}  alt="signin logo"  width={"80%"}/> 
                
                <Link className='hom-btn-pa' to={`/MemberAdd`}>Add Member</Link><br/><br/>
            </div>

            <div class="hom-box8">
            <img src={viewm}  alt="signin logo"  width={"80%"}/> 
              
                <Link className='hom-btn-pa' to={`/ViewMembers`}>View All Members</Link><br/><br/>
            </div>

            <div class="hom-box8">
            <img src={scanqr}  alt="signin logo"  width={"80%"}/> 
               
                <Link className='hom-btn-pa' color='white' to={`/assign`}>Assign</Link><br/><br/> 
            </div>

            <div class="hom-box8">
            <img src={gen}  alt="signin logo"  width={"80%"}/> 
               
                <Link className='hom-btn-pa' to={`/memberreport`}>Generate Report</Link><br/><br/>
            </div>


                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberHome;













/*export default function MainHome() {
  return (
    <div>
      <MemberHeader />
    
      <div className='lhom-Al1'>

<div className='lhom-logo1'>

    <div class="lhom-log1">
      
      <h1 className='lhom-h1'>District General Hospital Gampaha </h1>
      <h1 className='lhom-h1'>දිස්ත්‍රික් මහ රෝහල ගම්පහ </h1>
      <h1 className='lhom-h1'>மாவட்ட பொது வைத்தியசாலை கம்பஹா</h1>
    </div>

  </div>
</div>
        </div>
  )
}*/
