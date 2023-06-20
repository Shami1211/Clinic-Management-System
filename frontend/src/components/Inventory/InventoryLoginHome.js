import { } from '@mui/material';
import React from "react";
import './InventoryLoginHome.css';
import InventoryLoginHeader from './InventoryLoginHeader';
import emblem from '../Inventory/Photos/emblem.png';
import Inventory from '../Inventory/Photos/Inventory.png';


const Home = () => {
  return (
      <div >



<div > 

<InventoryLoginHeader/><br/><br/>
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
</div>

  );
};

export default Home;