import React from 'react';
import {Link} from 'react-router-dom';
import './InventoryMainHome.css';
import InventoryMainHeader from './InventoryMainHeader';
import Inventory from "./Photos/Inventory.png";
import emblem from "./Photos/emblem.png";
import inadd from './Photos/inadd.png';
import inall from './Photos/inall.png';
import inorder from './Photos/inorder.png';
import insupplier from './Photos/insupplier.png';


const InventoryMainHome = () => {

  return ( 
    <div > 

     

      <div > 

<InventoryMainHeader/><br/><br/>
<div className='phome-containerrr'>
<div className='ful-logr'>

<div className='full-logr'>

  <div className='h-1-phtooi'>
    <img src={emblem} className="h-1-p2" alt="signin logo" /> 
  </div>

  <h1 className='ph-h1-labr'>Inventory Management</h1>
  <h1 className='ph-h1-labrd'>District General Hospital Gampaha </h1>

</div>

<div className='full-logr'>

  <div class="logoor">
    <img src={Inventory} className="lb-lg-pr123" alt="signin logo"/> 
  </div>

</div>

</div>
</div>
    </div>
    
      <div className='phome-ball'>
        <div className='phome-Main'>

          <div class="hom-html">

            <div className='hom-menu-pa'>
              <h1 class="hom-heading">  <span className='hom-span'>Our Services</span> </h1>
                <div className='hom-box-container'>
               
                <div class="hom-box8">
                <br></br>
            <img src={inadd} className="hom-img" alt="signin logo"  width={"10%"}/>
                <Link className='hom-btn-pa' color='white' to={`/AddItem`}>Add Equipment</Link><br/><br/> 
            </div>

            <div class="hom-box8">
            <br></br>
            <img src={inall} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <Link className='hom-btn-pa' to={`/ViewAllItems`}>View Equipments</Link><br/><br/>
            </div>

                <div class="hom-box8">
                <br></br>
            <img src={inorder} className="hom-img" alt="signin logo"  width={"8%"}/>
                <Link className='hom-btn-pa' to={`/OrderStocks`}>Order Stocks</Link><br/><br/>
            </div>

            <div class="hom-box8">
            <br></br>
            <img src={insupplier} className="hom-img" alt="signin logo"  width={"8%"}/> 
                <Link className='hom-btn-pa' to={`/AddSupplier`}>Add Suppliers</Link><br/><br/>
            </div>

            <br></br>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryMainHome;