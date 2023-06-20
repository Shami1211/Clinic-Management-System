import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewAllItem from "./ViewAllItem";
import "./ViewAllItem.css";
import InventoryMainHeader from "./InventoryMainHeader";

const URL = "http://localhost:5000/items";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

const ViewAllItems = () => {
    const [items, setItems] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [noResults, setNoResults] = useState(false);

    //implementing search functionality
    const handleSearch = () => {
        fetchHandler().then(data => {
          const filteredItems = data.items.filter(item =>
            Object.values(item).some(field =>
              field.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
          setItems(filteredItems);
          setNoResults(filteredItems.length === 0);
        });
      };

    useEffect(() => {
        fetchHandler().then((data) => setItems(data.items));
    }, []);
    console.log(items);

    return ( 
    <div>
      <InventoryMainHeader/>
      <div className="hem-search-bar-container">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Entries" className="hem-search-bar"/>
        <button onClick={handleSearch} className="hem-search-button">Search</button>
      </div>

      <h2 style={{ fontSize:28, }}><center className="hem-h1">Equipment Details</center></h2><br/>

        {noResults ? (
        <div className="hem-no-results-container">
          <p className="hem-no-results-text">No Results Found</p>
        </div>) : (
        <div className="g">
            {items && items.map((item, i) => (
                <div className="hem-item-view" key={i}>
                    <ViewAllItem item={item} />
                </div>        
            ))}
        </div>
        )}

    </div>
    );
}

export default ViewAllItems;