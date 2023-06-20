import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppointmentRequest = (props) => {

  const history = useNavigate();

    const { _id, patient_id, patient_name, contact_number, reoson } = props.request

    const deleteHandler = () => {
      axios.delete(`http://localhost:5000/requests/${_id}`)
      .then(res=>res.data)
      .then(()=> history("/"))
      .then(()=> history("/appointmentsreq"));
    }

  return (
    <div >
      
      <div className='b'>
      
        <div className=' Dform-ball'>
          
          <div className='Dform-Min'>
  
            <div class="Dform-rowap0">
                         
                         <br></br>
             
              <div className='Dform-from'>
                                                   
                <div className='Dform-f'>

                      <h3 className='Dform-h3'>Patient ID :</h3> 
                      <h3 className='Dform-in'> {patient_id}</h3>

                      <h3 className='Dform-h3'>Patient Name :</h3>  
                      <h3 className='Dform-in'>{patient_name}</h3>

                      <h3 className='Dform-h3'>Contact Number :</h3>  
                      <h3 className='Dform-in'>{contact_number}</h3>

                      <h3 className='Dform-h3'>Reason :</h3>  
                      <h3 className='Dform-in'>{reoson}</h3>


                              <br></br>

                      <table className='Dform-b'>

                        <tr>
                          <th><Link to={`http://localhost:3000/appointments/scaned/${patient_id}`}class="form-button-409">Find The Patient</Link></th>
                          <th className='wdrt0'></th>
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

    </div>
  )
}

export default AppointmentRequest