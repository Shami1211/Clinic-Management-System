import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Appointment.css"
import AppointmentHome02nav from "./AppointmentHome02/AppointmentHome02nav"
import AppointmentRequest from './AppointmentRequest';
const URL = "http://localhost:5000/requests";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const AppointmentRequests = () => {
  const [appointmentsRequests, setappointmentsRequests] = useState();
  useEffect(() => {

    fetchHandler().then(data=>setappointmentsRequests(data.appointmentsRequests))
  },[]);
  console.log(appointmentsRequests)

  return (
  
    <div >

    <AppointmentHome02nav/>
        
        <br></br><br></br>
          
          <div className='b'>
      
            <h1 className='drughed'>Appointment Requests Details</h1>
              
              <div  className='g'>
                
                {appointmentsRequests && appointmentsRequests.map((appointmentRequest , i)=> (
                    <AppointmentRequest key={i} request={appointmentRequest}/>
                  ))}

              </div>
          
           </div>
   </div>
  )
  
}

export default AppointmentRequests