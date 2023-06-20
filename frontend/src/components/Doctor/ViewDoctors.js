//View Doctor Details
import React, { useEffect, useState } from "react";
import "./ViewDoctor.css";
import axios from 'axios';
import Doctor from "./Doctor";
import DocAdminHeader from './DocAdminHeader';
const URL = "http://localhost:5000/doctors";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data);
};
const ViewDoctors = () => {
    const [doctors, setDoctors] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [noResults, setNoResults] = useState(false);

    //search record
    const handleSearch = () => {
        fetchHandler().then(data => {
          const filteredDoctors = data.doctors.filter(doctor =>
            Object.values(doctor).some(field =>
              field.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
          setDoctors(filteredDoctors);
          setNoResults(filteredDoctors.length === 0);
        });
      };

    useEffect(() => {
        fetchHandler().then((data)=>setDoctors(data.doctors));
        
    },[]);
    console.log(doctors);
    return <div>
    <DocAdminHeader/><br/><br/><br/>

    <div>

    <h2 style={{fontFamily: "Oswald", color:"#ffffff", paddingLeft:"650px", fontSize:"45px"}}>
            View Doctor Details
        </h2>   <br/>

     <div className="ama-search-bar-container">
        <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search Your Details" 
        className="ama-search-bar"/>
        <button onClick={handleSearch} 
        className="ama-search-button">Search</button>
      </div>

        <br/> <br/><br/>

        {noResults ? (
        <div className="ama-no-results-container">
          <p className="ama-no-results-text">No Results Found</p>
        </div>) : (

        <div className="ama-view-table">
        <table  className="ama-table" border="8px">
            <th>
            <tr className="ama-header-row">  
                <td className='ama-table-td' ><b style={{fontFamily:"Oswald"}}>Full Name</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Date Of Birth</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Age</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Mobile No</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Email</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Clinic</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Unit</b></td>
                <td className='ama-table-td'><b style={{fontFamily:"Oswald"}}>Specialization</b></td>
                <td className='ama-table-td' colSpan={2}><b style={{fontFamily:"Oswald"}}>Actions</b></td>
            </tr>   
             {doctors && doctors.map((doctor,i)=>(
                        <Doctor doctor={doctor}/>                
                ))}
            
            </th>
        </table>
        </div>
        )}
    </div>
    </div>
};

export default ViewDoctors;