
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';
import './Styles/UpdatePatientDetails.css';
import Header from '../Patient/ReceptionHeader';


const PatientDetails = () => {

    const[inputs, setInputs] = useState({});
    const id = useParams().id;
    const history = useNavigate();

    //fetch data according to the ID
    useEffect(()=>{ 
        const fetchHandler = async() =>{
            await axios
            .get(`http://localhost:5000/patients/viewPatient/${id}`)
            .then((res)=>res.data)
            .then(data=>setInputs(data.patient));
        };
        fetchHandler()
    },[id]);


    //send request to update data of patient
    const sendRequest = async() =>{
        await axios.put(`http://localhost:5000/patients/updateDetails/${id}`,{
            patientContact:Number(inputs.patientContact),
            patientAddress:String(inputs.patientAddress),
            guardian:String(inputs.guardian),
            relationship:String(inputs.relationship),
            guardContact:String(inputs.patientContact),
            division:String(inputs.division)
        }).then(res=>res.data)
    }

    //function to send request to the backend
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/viewPatients"))
    };

    const handleChange = (e) =>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

  return( 
    <div>
       <Header/><br/><br/><br/>
    {inputs && (
        <div className=' form-ball'>
            <div className='form-Main-nwr'>
  
                <div class="Aform-row1r">
  
                    <div className='form-fullboxr'>
  
  
                        <h2 className='form-h22r'>Patient Details Updating Form</h2>
                 
                            <form className='form-fromr' onSubmit={handleSubmit}>
                                <div className='form-fr'>
                                  
                                  
                                  <h3 className='form-h3r'>Name:</h3>
                                  <div className='form-inr'>
                                    <input className='add-put-bnr' value={inputs.patientName} onChange={handleChange} placeholder="Enter details" type={Text} name="patientName"  required readOnly></input>
                                  </div>
                        
                                  <br/>
                                  <tr>
                                    <td>
                                      <h3 className='form-h3r'>Date of Birth:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.patientdob} onChange={handleChange} placeholder="Enter details" type={'date'} name="patientdob"  required readOnly></input>
                                      </div>
                                    </td>
                                    <br/>
                                    <td>
                                      <h3 className='form-h3r'>NIC number:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.patientNIC} onChange={handleChange} placeholder="Enter details" type={Text} name="patientNIC"  required readOnly></input>
                                      </div>
                                    </td>
                                  </tr>
                                  <br/>
                          
                                  <tr>
                                    <td>
                                      <h3 className='form-h3r'>Contact Number:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.patientContact} onChange={handleChange} placeholder="Enter details" type={Text} name="patientContact"  required></input>
                                      </div>
                                    </td>
                                    <br/>
                                    <td>
                                      <h3 className='form-h3r'>Address:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.patientAddress} onChange={handleChange} placeholder="Enter details" type={Text} name="patientAddress"  required></input>
                                      </div>
                                    </td>
                                  </tr>

                                  <br/>

                                  <h3 className='form-h3r'>Clinic:</h3>
                                  <div className='form-inr'>
                                  <input className='add-put-bnr' value={inputs.clinic} onChange={handleChange} placeholder="Enter details" type={Text} name="clinic"  required readOnly></input>
                                  </div>   

                                  <br/>
                                  <tr>
                                    <td>
                                      <h3 className='form-h3r'>Guardian:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.guardian} onChange={handleChange} placeholder="Enter details" type={Text} name="guardian" required></input>
                                      </div>
                                    </td>
                                    <br/>
                                    <td>
                                      <h3 className='form-h3r'>Realationship with Guardian:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.relationship} onChange={handleChange} placeholder="Enter details" type={Text} name="relationship" required></input>
                                      </div>
                                    </td>
                                  </tr>
                                  <br/>
                                  <tr>
                                    <td>
                                      <h3 className='form-h3r'>Guardian's Contact:</h3>
                                      <div className='form-inr'>
                                        <input className='add-put-dtrtd' value={inputs.guardContact} onChange={handleChange} placeholder="Enter details" type={Text} name="guardContact" required></input>
                                      </div>
                                    </td>
                                    <br/>
                                    <td>
                                      <h3 className='form-h3r'>AGA Division:</h3>
                                      <div className='form-inr'>
                                        <Select className='add-put-dtrtd' value={inputs.division} onChange={handleChange} name="division" required>
                                            <MenuItem value="Attanagalla">Attanagalla</MenuItem>
                                            <MenuItem value="Biyagama">Biyagama</MenuItem>
                                            <MenuItem value="Divulapitiya">Divulapitiya</MenuItem>
                                            <MenuItem value="Dompe">Dompe</MenuItem>
                                            <MenuItem value="Gampaha">Gampaha</MenuItem>
                                            <MenuItem value="Ja-Ela">Ja-Ela</MenuItem>
                                            <MenuItem value="Katana">Katana</MenuItem>
                                            <MenuItem value="Kelaniya">Kelaniya</MenuItem>
                                            <MenuItem value="Mahara">Mahara</MenuItem>
                                            <MenuItem value="Minuwangoda">Minuwangoda</MenuItem>
                                            <MenuItem value="Mirigama">Mirigama</MenuItem>
                                            <MenuItem value="Negombo">Negombo</MenuItem>
                                            <MenuItem value="Wattala">Wattala</MenuItem>
                                          </Select>
                                      </div>
                                    </td>
                                  </tr>
                                  <br/>
                                </div>
                      
                               
                                <div className='dadd-br'>
                                  <button className='dadd-button-24rt' type="submit">Submit</button>
                                </div>


                                
                            </form>
                    </div>
                    <br></br>
            </div>            
        </div>                
      </div>
        )} 
    </div>               
)}

export default PatientDetails