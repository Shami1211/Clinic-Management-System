import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Appointment from './Appointment';
import AppointmentHome02nav from "./AppointmentHome02/AppointmentHome02nav"
import "./Appointment.css"
const URL = "http://localhost:5000/appointments";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}


const Appointments = () => {
  const [appointments, setappointments] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then(data => {
      const filteredAppointmens = data.appointments.filter(Appointmen =>
        Object.values(Appointmen).some(field =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setappointments(filteredAppointmens);
      setNoResults(filteredAppointmens.length === 0);
    });
  };


  useEffect(() => {
    fetchHandler().then(data=>setappointments(data.appointments)) 
  },[]);


  console.log(appointments)

  return (

    <div >
      <AppointmentHome02nav/>
      <br></br><br></br>
      <div className='b'>
        
      <h1 className='drughed'>Appointment Details</h1>

      <br></br>
            
            <div class="form-search" >
            <input className='serinpt' onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" placeholder="Search Appointment Details.."></input>
            <button onClick={handleSearch} className="searchbutton">
            <i class="fa fa-search"></i>
          </button>   
        </div>
      
      <br></br>
            

            {noResults ? (
              <div className="hem-no-results-container">
                <p className="hem-no-results-text">No Results Found</p>
              </div>): (

      <div  className='g'>
      {appointments && 
          appointments.map((appointment, i) => (
            <div key={i}>
            <Appointment appointment={appointment} />
            </div>
          ))}
     </div>)}
      </div>
      
      {/*<ul>
        {appointments && 
          appointments.map((appointment, i) => (
            <li key={i}>
              <Appointment appointment={appointment} />
            </li>
          ))}
      </ul>*/}
    </div>
  )
}

export default Appointments