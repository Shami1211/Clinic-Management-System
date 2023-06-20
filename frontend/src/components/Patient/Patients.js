import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Patient from "./Patient";
import './Styles/Patient.css';
import ReceptionHeader from './ReceptionHeader'

const URL = 'http://localhost:5000/patients/viewAll'; // used to fetch all patients in the system.


//passes requests
const fetchHandler  = async()=>{

    return await axios.get(URL).then((res)=> res.data);

};

const Patients = () => {
    
   const [patients,setPatients] = useState();
   const [searchPatientQuery, setSearchPatientQuery] = useState('');
    const [noResults, setNoResults] = useState(false);


    //function to search a specific patient
    const handleSearch = () => {
        fetchHandler().then(data => {
          const filterPatients = data.patients.filter(patient =>
            Object.values(patient).some(field =>
              field.toString().toLowerCase().includes(searchPatientQuery.toLowerCase())
            )
          );
          setPatients(filterPatients);
          setNoResults(filterPatients.length === 0);
        });
      };


    useEffect(()=>{
    fetchHandler().then(data=>setPatients(data.patients));

   },[]);
   
   //console.log(patients);
    return<div>
        <ReceptionHeader/><br/><br/><br/>
        <div className='room-table'>
            <div>
        <div className="other-tabl-full">
        <h1 className="other-h-1">Patients Details</h1><br/>



        <div className="ama-search-bar-container">
        <input 
          type="text" 
          value={searchPatientQuery} 
          onChange={(e) => setSearchPatientQuery(e.target.value)} 
          placeholder="Search Your Details" 
          className="ama-search-bar"/>

        <button onClick={handleSearch} className="ama-search-button">Search</button>
      </div>

        <br/><br/>

        {noResults ? (
        <div className="ama-no-results-container">
          <p className="ama-no-results-text">No Results Found</p>
        </div>) : (


        <table className="lab-other-tabl" border="5px">
            <th className='patient-th'>
                <td className="tabl-pat">Reg Number</td>
                <td className="tabl-pat">Name</td>
                <td className="tabl-pat">Patient NIC</td>
                <td className="tabl-pat">Clinic</td>
                <td className="tabl-pat">AGA Division</td>
                <td className="tabl-pat">Reg Date</td>
                <td className="tabl-pat"></td>      
            </th>

            <tr>
                {patients && patients.map((patient,i)=>(
                        <Patient patient={patient}/>                
                ))}
            </tr>
        </table>)}
        <br></br> <br></br>
        </div>
        </div>
        </div>
    </div>
}

export default Patients;
