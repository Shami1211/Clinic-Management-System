import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Drug from './Drug'; 
import './drugs.css';
import PNav from "../Phamacy/Phamacy_Home_02/PNav";

/*DB URL*/
const URL = "http://localhost:5000/drugs/viewAllDrugs";

const fetchHandler = async ()=>{
  return await axios.get(URL).then((res) => res.data);
};

const  Drugs = ()=>  {
const [drugs, setDrugs] = useState();
const [searchQuery, setSearchQuery] = useState('');
const [noResults, setNoResults] = useState(false);

const handleSearch = () => {
  fetchHandler().then(data => {
    const filteredDrugs = data.drugs.filter(drug =>
      Object.values(drug).some(field =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
      setDrugs(filteredDrugs);
      setNoResults(filteredDrugs.length === 0);
  });
};
    
useEffect(() => {
  fetchHandler().then((data) => setDrugs(data.drugs));
}, []);

console.log(drugs);

return (

    <div>

        <PNav></PNav>

        <br></br><br></br>

        <div className='b'> 
    
          <h1 className='drughed'>Drugs Details</h1>

            <br></br>
            
            <div class="form-search" >
              <input className='serinpt' onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" placeholder="Search Drug Details.."></input>
              <button onClick={handleSearch} className="searchbutton">
                <i class="fa fa-search"></i>
              </button>   
            </div>
      
            <br></br>

            {noResults ? (
              <div className="hem-no-results-container">
                <p className="hem-no-results-text">No Results Found</p>
              </div>): (

            <div className='g'>

              {drugs && drugs.map((drug, i) => (
                  <div  key={i}>
                    <Drug drug={drug} />
                  </div>
                ))}

            </div>)}
              
        </div>

    </div>
)
}

export default Drugs