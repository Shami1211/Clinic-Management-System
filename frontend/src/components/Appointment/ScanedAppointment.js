import axios from 'axios';
import AppointmentHome02nav from "./AppointmentHome02/AppointmentHome02nav";
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ScanedAppointment = () => {
    const [inputs, setinputs] = useState({})
    const [isChecked, setIsChecked] = useState(false);

    const id = useParams().patient_id;
    console.log(id);
    const history = useNavigate();

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        sendAttendenceRequest()
      };

    useEffect(() => {
        const fetchHandler = async() => {
            await axios
            .get(`http://localhost:5000/appointments/scaned/${id}`)
            .then((res) => res.data).then(data => setinputs(data.appointment));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/appointments/${id}`,{
            patient_id:String(inputs.patient_id),
            patient_name:String(inputs.patient_name),
            contact_number:String(inputs.contact_number),
            slot_number:Number(inputs.slot_number),
            appoinment_date:String(inputs.appoinment_date),
            appoinment_time:String(inputs.appoinment_time)
        }).then(res=>res.data)
    }

    const sendAttendenceRequest = async() => {
      axios.post("http://localhost:5000/attendence/addattendence", {
  
        patient_id:String(inputs.patient_id),
        patient_name:String(inputs.patient_name),
        contact_number:Number(inputs.contact_number),
        slot_number:Number(inputs.slot_number),
        appoinment_date:String(inputs.appoinment_date),
        appoinment_time:String(inputs.appoinment_time)
  
      }).then(res => res.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/appointments"));

        const message = `*Appointment Details:*
        %0aNOTE - Your Appointment Updated
    %0aPatient Name: ${inputs.patient_name}
    %0aContact Number: ${inputs.contact_number}
    %0aAppointment Date: ${inputs.appoinment_date}
    %0aAppointment Time: ${inputs.appoinment_time}
    %0aSlot Number: ${inputs.slot_number}
    %0aIf you cannot come to that date fill the request form - https://docs.google.com/forms/d/e/1FAIpQLSfJGtQR4fZfQ5bxDBo-Ttm8_b8X7Ud9_twFre6R53Y6ltsqJA/viewform
    %0a*--District General Hospital Gampaha--*`;

    //const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    //https://web.whatsapp.com/send?phone=${inputs.contact_number}&text=${inputs.patient_name}&app_absent=0

    const messageLink = `https://web.whatsapp.com/send?phone=${inputs.contact_number}&text=${message}&app_absent=0`

    window.open(messageLink);
        
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:5000/appointments/${id}`)
        .then(res=>res.data)
        .then(()=> history("/"))
        .then(()=> history("/appointments"));
      }

    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
      
          }));
          
    };
    console.log(inputs);
    return <div>

<AppointmentHome02nav />
<br></br><br></br><br></br>
    { inputs && <form onSubmit={handleSubmit}>




              <div className='form-ball'>
                  
                  <div className='form-Main-nwr'>
                            
                    <div class="Aform-row1rop">
                        
                      <div className='form-fullboxr'>
                        
                       
                
                        <h1 className='form-h22r'>Appointment Details</h1>
                          
                          <div className='form-fromrr'>
                                                    
                            <div className='form-fr'>
<tr>
                            <td className='nm-td'><h3 className='form-h3r'>Mark Attendence</h3></td>
                            <div class="checkbox-wrapper-19">
                            <td> <input className='form-inr' type="checkbox" id="cbtest-19"checked={isChecked} onChange={handleCheckboxChange} />
                            <label for="cbtest-19" class="check-box"/>   </td>    
                        </div>
                        </tr>
                     
                        <br></br>
              
                              <h3 className='form-h3r'>Patient ID </h3> 
                              <div className='form-inr'>
                                <input className='add-put-bnr' value={inputs.patient_id} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='patient_id' />
                              </div>

                              <h3 className='form-h3r'>Patient Name </h3>
                              <div className='form-inr'>
                                <input className='add-put-bnr' value={inputs.patient_name} onChange={handleChange} name='patient_name' />
                              </div>


                              <tr>
                                <td> <h3 className='form-h3r'>Contact Number</h3> </td>
                                <td><h3 className='form-h3r'>Slot Number</h3></td>
                              </tr>

                              <tr>
                                <td>
                                <div className='form-inr'>
                                  <input className='add-put-dtrtd' value={inputs.contact_number} onChange={handleChange} placeholder='Ex: +9471XXXXXXXX' name='contact_number' />
                              </div>
                                </td>
                          
                                <td>
                                <div className='form-inr'>
                                <input className='add-put-dtrtd' value={inputs.slot_number} onChange={handleChange} name='slot_number'/>
                              </div>
                                </td>
                              </tr>


                              <tr>
                                <td> <h3 className='form-h3r'>Appointment Date</h3> </td>
                                <td><h3 className='form-h3r'>Appointment Time</h3></td>
                              </tr>

                              <tr>
                                <td>
                                <div className='form-inr'>
                                <input className='add-put-dtrtd' value={inputs.appoinment_date}onChange={handleChange} type={'date'} placeholder='Ex: 2022/04/30'name='appoinment_date'/>
                              </div>
                                </td>
                          
                                <td>
                                <div className='form-inr'>
                                <input className='add-put-dtrtd'value={inputs.appoinment_time} onChange={handleChange} name='appoinment_time' />
                              </div>
                                </td>
                              </tr>
                              
                              <br />
                              <div className='dadd-b-apr'>
                            <button className='dadd-button-ape' >Update Appointment</button>
                          </div>

                          <br />
                              <div className='dadd-b-apr'>
                            <button className='dadd-button-app' onClick={deleteHandler} >Delete Appointment</button>
                          </div>
                          <br />  
                      </div>

                  </div>

                </div>

              </div>

            </div>
                  
          </div>
    


      
    </form>}
    </div>
};

export default ScanedAppointment