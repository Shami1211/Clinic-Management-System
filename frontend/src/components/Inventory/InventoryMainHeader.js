import React from 'react';
import {Link} from 'react-router-dom';
import emblem from './Photos/emblem.png';
import './InventoryMainHeader.css';

const Header = () => {

  return (
    <div>
        <div>
            <div className='hem-a'>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

                    <body>
                            <nav>
                                <div class="hem-logo">
                                    <img src={emblem} alt="signin logo"  width={"14%"}/>
                                </div>
                               
                                <div class="hem-doc-nav-itms">
                                    <li><a href='#home'><Link to="/InventoryMainHome"  class="hem-p-hom-btn" >Home</Link></a></li>
                                    <li><a href='#add'><Link to="/AddItem"  class="hem-p-hom-btn" >Add Equipment</Link></a></li>
                                    <li><a href='#view-all'><Link to="/ViewAllItems"  class="hem-p-hom-btn" >All Equipments</Link></a></li>
                                    <li><a href='#order'><Link to="/OrderStocks"  class="hem-p-hom-btn" >Order Stocks</Link></a></li>
                                    <li><a href='#daily'><Link to="/InventoryDailyReport" class="hem-p-hom-btn" >Daily Report</Link></a></li>
                                    <li><a href='#add'><Link to="/AddSupplier"  class="hem-p-hom-btn" >Add Suppliers</Link></a></li>
                                    <li><a href='#view-all'><Link to="/ViewSuppliers"  class="hem-p-hom-btn" >View Suppliers</Link></a></li>
                                </div>
                                <div className='nv-b'>
                                    <Link to={'/InventoryLoginHome'} className='nv-btnr'>Logout</Link>
                                </div>
                            </nav>
                    </body>
                
            </div>
        </div>
    </div>

  )
}

export default Header;