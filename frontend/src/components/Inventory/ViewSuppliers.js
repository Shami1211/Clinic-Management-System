import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ViewItems.css";
import SupplierMain from './SupplierMain';
import InventoryHeader from "./InventoryMainHeader";

const URL = 'http://localhost:5000/suppliers';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);


  //implementing search functionality
  const handleSearch = () => {
    fetchHandler().then(data => {
      const filteredSuppliers = data.suppliers.filter(supplier =>
        Object.values(supplier).some(field =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSuppliers(filteredSuppliers);
      setNoResults(filteredSuppliers.length === 0);
    });
  };

  useEffect(() => {
    fetchHandler().then(data => setSuppliers(data.suppliers));
  }, []);

  console.log(suppliers);
  return (
    <div>
      <InventoryHeader/>
      <div className="hem-search-bar-container">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Entries" className="hem-search-bar"/>
        <button onClick={handleSearch} className="hem-search-button">Search</button>
      </div>

      <div className="hem-topic-name">
      
        <h2 className='hem-h1'>Supplier Details</h2>
    
      </div>

      {noResults ? (
        <div className="hem-no-results-container">
          <p className="hem-no-results-text">No Results Found</p>
        </div>) : (
        <div className="hem-view-table">
          <table className="hem-table" cellPadding={0} border="1px">

            
              <tr className="hem-header-row">
                <td className="hem-table-td"><b className="hem-table-tdata">Supplier ID</b></td>
                <td className="hem-table-td"><b className="hem-table-tdata">Supplier Name</b></td>
                <td className="hem-table-td"><b className="hem-table-tdata">Company</b></td>
                <td className="hem-table-td"><b className="hem-table-tdata">Stock Category</b></td>
                <td className="hem-table-td"><b className="hem-table-tdata">Email</b></td>
                <td className="hem-table-td"><b className="hem-table-tdata">Contact Number</b></td>
                <td className="hem-table-td" colSpan={2}><b>Actions</b></td>
              </tr>
            
            <tbody>
              {suppliers.map((supplier, i) => (
                <SupplierMain key={i} supplier={supplier} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Suppliers;