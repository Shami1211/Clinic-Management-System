//view doctors profiles
import React, { useEffect, useState } from "react";
import "./DoctorViewProfile.css";
import axios from "axios";
import DoctorViewProfile from "./DoctorViewProfile";
import DoctorHeader from './DoctorHeader';
//import { useNavigate } from 'react-router-dom';
const URL = "http://localhost:5000/doctors";


const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);

};
const DoctorsViewProfile = () => {
    const [doctors, setDoctors] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [setNoResults] = useState(false);
    //const navigate = useNavigate();


    //search specific doctor
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
        fetchHandler().then((data) => setDoctors(data.doctors));
    }, []);
    console.log(doctors);

    return <div>
        <DoctorHeader/><br/><br/>
    
    <h2 className="ama-view-topic-1">
            View Profiles
        </h2>

    <div className="ama-search-bar-container">
        <input type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search Your Name" 
        className="ama-search-bar-1"/>
        <button 
          onClick={handleSearch} 
          className="ama-search-button-view">
            Search
        </button>
        
      </div>

      <br/> <br/>

      {doctors && doctors.length > 0 ? (
            <ul className="ama-doc-ul">
            {doctors.map((doctor, i) => (
              <div className="ama-doctor-view" key={i}>
                <DoctorViewProfile doctor={doctor} />
              </div>
            ))}
          </ul>
          
        ) : (
          <div className="ama-no-results-container-1">
          {searchQuery.length === 0 ? (
              <p className="ama-no-results-text-1">Search for a doctor by name.</p>
          ) : (
              <p className="ama-no-results-text-1">No Results Found</p>
          )}
          </div>
        )}
        
        {searchQuery.length > 0 && doctors && doctors.length === 0 && (
            <div className="ama-no-results-container-1">
                <p className="ama-no-results-text-1"></p>
            </div>
        )}

  
      {searchQuery.length  > 0 && doctors && doctors.length > 0 && (
      
        <div className="ama-view-ful">
          <br></br>

          </div>
        )}  
    </div>


};

export default DoctorsViewProfile;