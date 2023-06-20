import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Appointment.css"


const Appointment = (props) => {
  const history = useNavigate();

    const { patient_id, patient_name, contact_number, slot_number, appoinment_date, appoinment_time} = props.appointment;
  
    const deleteHandler = () => {
      axios.delete(`http://localhost:5000/appointments/${patient_id}`)
      .then(res=>res.data)
      .then(()=> history("/"))
      .then(()=> history("/Deletereport"));
    }

    return (
      <div className='b'>
      
         <div className=' Dform-ball'>
            
            <div className='Dform-Min'>

              <div class="Dform-rowap">

                            <br></br>
                
                <div className='Dform-from'>
                                                      
                  <div className='Dform-f'>

                    <h4 className='Dform-h3'>Patient ID :</h4>
                    <h3 className='Dform-in'>{patient_id}</h3> 

                    <strong className='Dform-h3'>Patient Name : </strong> 
                    <h3 className='Dform-in'>{patient_name}</h3>

                    <strong className='Dform-h3'>Contact Number : </strong>
                    <h3 className='Dform-in'>{contact_number}</h3>

                    <strong className='Dform-h3'>Slot Number : </strong> 
                    <h3 className='Dform-in'>{slot_number}</h3>
                    
                    <strong className='Dform-h3'>Appointment Date : </strong>
                    <h3 className='Dform-in'>{appoinment_date}</h3>
                    
                    <strong className='Dform-h3'>Appointment Time : </strong>
                    <h3 className='Dform-in'>{appoinment_time}</h3>

                         <br></br>


                    <table className='Dform-b'>

                      <tr>
                        <th><Link to={`/appointments/${patient_id}`} class="form-button-4">Update</Link></th>
                        <th className='wdr'></th>
                        <th><button className='form-button-2' onClick={deleteHandler}>Delete</button></th> 
                      </tr>

                    </table>

                          <br></br>

                  </div>
                
                </div>
                
              </div>
              
            </div>
          
        </div>
        
      </div>
  )
}

export default Appointment