import React from 'react'
import {Link} from 'react-router-dom'
import '../Laboratary/CSS/LabMainHome.css'
import Header from '../Laboratary/Header'
import Icon from '../Patient/Photos/Icon.png';
import labmana from'../Laboratary/CSS/photos/nv.png';
import lbtest from '../Laboratary/CSS/photos/lbtest.png';
import test from '../Laboratary/CSS/photos/test.png';
import scan from '../Patient/Photos/scnqr.png';
import others from '../Laboratary/CSS/photos/others.png';
const LabMainHome = () => {



  return ( 
    <div > 

      <Header/><br/><br/>
      <div className='phome-containe'>

      <div className='ful-logr'>
            
            <div className='full-logr'>
          
              <div className='h-1-phtooi'>
                <img src={Icon} className="h-1-p2" alt="signin logo" /> 
              </div>

              <h1 className='ph-h1-labr'>Laboratary Management</h1>
              <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>
            
            </div>

            <div className='full-logr'>

              <div class="logoor">
                <img src={labmana} className="lb-lg-pr12369" alt="signin logo"/> 
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
                <br></br>
            <img src={scan} className="hom-img" alt="signin logo"  width={"10%"}/> 
                <Link className='hom-btn-pa' color='white' to={`/labscan`}>Scan QR</Link><br/><br/> 
            </div>

                <div class="hom-box8">
                <br></br>
            <img src={lbtest} className="hom-img" alt="signin logo"  width={"8%"}/>
                <Link className='hom-btn-pa' to={`/labadd`}>New Test</Link><br/><br/>
            </div>

            <div class="hom-box8">
            <br></br>
            <img src={test} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <Link className='hom-btn-pa' to={`/labreports`}>Test</Link><br/><br/>
            </div>


            <div class="hom-box8">
            <br></br>
            <img src={others} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <Link className='hom-btn-pa' to={`/labothers`}>Others</Link><br/><br/>
            </div>


                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LabMainHome;

