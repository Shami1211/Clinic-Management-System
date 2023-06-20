
import React, { useState } from 'react' //allows to add state to a functional component
import axios from 'axios'; //lets the developer to fetch third party data
import {useNavigate} from 'react-router-dom';   //used pass the navigation prop into the component directly,
import './Styles/AddPatient.css';
import { Select, MenuItem } from '@mui/material';
import ReceptionHeader from './ReceptionHeader';


//Function To Add Patients To the System
const AddPatient = () => {

  //used to traverse between pages
  const history = useNavigate();

  //make sure the form form is clear
  const[inputs,setInputs] = useState({
        registrationNumber:"",
        patientName:"",
        patientdob:"",
        patientNIC:"",
        patientContact:"",
        patientAddress:"",
        clinic:"",
        gender:"",
        guardian:"",
        relationship:"",
        guardContact:"",
        division:"",
        registrationDate:""
  });

  //getting current date
  const current = new Date();
  const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;


  //handles changes in the filds of the form
  const handleChange = (event) => {
    setInputs((prevState) => ({

      ...prevState,
      [event.target.name] : event.target.value  

    })) 
  };

  //used to send request to the backend
  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/patients/addPatients", {
        patientName:String(inputs.patientName),
        patientdob:String(inputs.patientdob),
        patientNIC:Number(inputs.patientNIC),
        patientContact:Number(inputs.patientContact),
        patientAddress:String(inputs.patientAddress),
        clinic:String(inputs.clinic),
        gender:String(inputs.gender),
        guardian:String(inputs.guardian),
        relationship:String(inputs.relationship),
        guardContact:String(inputs.patientContact),
        division:String(inputs.division),
        registrationDate:String(date)
    }).then(res=>res.data);
  }


  //executes when submitting the form
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs);
    sendRequest()
    .then(alert("Patient Registered Successfully"))
    .then(()=>history(`/viewPatients`)); //indicates the page needed to be displayed next
  }

  

  return (
    <div>

      <ReceptionHeader/>
      
        <br/><br/><br/>

        <form onSubmit={handleSubmit}>
          
          <div className='form-ball'>

            <div className='form-Main-nwr'>

              <div className="Aform-row1r">

                <div className='form-fullboxr'>

                  <br></br>
                  <h1 className='form-h22r'>Patient Registration Form</h1>
                    <div className='form-fromr'>
                      <div className='form-fr'>
                       
                        <h3 className='form-h3r'>Name:</h3>
                        <div className='form-inr'>
                          <input className='add-put-bnr' value={inputs.patientName} onChange={handleChange} placeholder="Saman Perera" type={Text} name="patientName"  required></input>
                        </div>
                        
                            <br/>


                           <tr>
                            <td >
                        <h3 className='form-h3r'>Date of Birth:</h3>
                        <div className='form-inr'>
                          <input className='add-put-dtrtd' value={inputs.patientdob} onChange={handleChange}  type={'date'} name="patientdob"  required></input>
                        </div>
                        </td>
                            <br/>
                          <td>
                        <h3 className='form-h3r'>NIC number:</h3>
                        <div className='form-inr'>
                          <input className='add-put-dtrtd' value={inputs.patientNIC} onChange={handleChange} pattern='[0-9A-Z]{12}' maxLength={12}  placeholder="xxxxxxxxxxxx / xxxxxxxxxV" type={Text} name="patientNIC"  required></input>
                        </div>
                        </td>
                        </tr>

                        
                            <br/>
                          <tr>
                            <td>
                              <h3 className='form-h3r'>Contact Number:</h3>
                              <div className='form-inr'>
                                <input className='add-put-dtrtd' value={inputs.patientContact} onChange={handleChange} pattern='[0-9]{10}' maxLength={10} placeholder="07XXXXXXXX" type={Text} name="patientContact"  required></input>
                              </div>
                        </td>
                            <br/>
                          <td>
                        <h3 className='form-h3r'>Address:</h3>
                        <div className='form-inr'>
                          <input className='add-put-dtrtd' value={inputs.patientAddress} onChange={handleChange} placeholder="234D, Temple Road, Kadawatha" type={Text} name="patientAddress"  required></input>
                       
                        </div>
                        </td>
                        </tr>

                            <br/>
                        <tr>
                          <td>
                            <h3 className='form-h3r'>Clinic:</h3>
                            <div className='form-inr'>
                              <Select className="add-put-dtrtd" value={inputs.clinic} onChange={handleChange} name="clinic" required>
                                  <MenuItem value="Surgical">Surgical</MenuItem>
                                  <MenuItem value="Medical">Medical</MenuItem>
                                  <MenuItem value="Gynecology">Gynecology</MenuItem>
                                  <MenuItem value="Maternity">Maternity</MenuItem>
                                  <MenuItem value="Children">Children</MenuItem>
                                  <MenuItem value="Suva-Daru">Suva-Daru</MenuItem>
                                  <MenuItem value="Cardiology">Cardiology</MenuItem>
                                  <MenuItem value="ENT">ENT</MenuItem>
                                  <MenuItem value="Skin">Skin</MenuItem>
                                  <MenuItem value="Psychology">Psychology</MenuItem>
                                  <MenuItem value="Urogenital">Urogenital</MenuItem>
                                  <MenuItem value="Kidney">Kidney</MenuItem>
                                  <MenuItem value="Neurology">Neurology</MenuItem>
                                  <MenuItem value="Hormonal">Hormonal</MenuItem>
                                  <MenuItem value="Family">Family</MenuItem>
                                  <MenuItem value="Eye">Eye</MenuItem>
                                  <MenuItem value="Respiratory">Respiratory</MenuItem>
                                  <MenuItem value="Chest">Chest</MenuItem>
                                  <MenuItem value="Ingout">Ingout</MenuItem>
                                  <MenuItem value="Cancer">Cancer</MenuItem>
                                  <MenuItem value="Orthopedics">Orthopedics</MenuItem>
                                  <MenuItem value="OMF">OMF</MenuItem>
                                  <MenuItem value="Dental">Dental</MenuItem>
                                </Select>
                            </div>  
                          </td>
                          <br/>
                          <td>

                          <h3 className='form-h3r'>Gender:</h3>
                            <div className='form-inr'>

                              <Select className="add-put-dtrtd" value={inputs.gender} placeholder='Choose' onChange={handleChange} name="gender" required>
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                              </Select>

                            </div>
                          </td>

                        </tr> 

                        <br/>
                        <tr>
                          <td>
                        <h3 className='form-h3r'>Guardian:</h3>
                        <div className='form-inr'>
                          <input className='add-put-dtrtd' value={inputs.guardian} onChange={handleChange} placeholder="Shantha Bandara" type={Text} name="guardian" required></input>
                        </div>
                        </td>
                            <br/>
                         <td>
                        <h3 className='form-h3r'>Relationship with Guardian:</h3>
                        <div className='form-inr'>
                          <input className='add-put-dtrtd' value={inputs.relationship} onChange={handleChange} placeholder="Father" type={Text} name="relationship" required></input>
                        </div>
                        </td>
                        </tr>
                            <br/>
                           <tr>
                            <td>
                        <h3 className='form-h3r'>Guardian's Contact:</h3>
                        <div className='form-inr'>
                          <input className='add-put-dtrtd' value={inputs.guardContact} onChange={handleChange} placeholder="07XXXXXXXX" maxLength={10} type={Text} name="guardContact" required></input>
                        </div>
                        </td>
                            <br/>
                       <td>
                        <h3 className='form-h3r'>AGA Division:</h3>
                        <div className='form-inr'>
                          <Select className="add-put-dtrtd" value={inputs.division} onChange={handleChange} name="division" required>
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
                            
                            <div className='dadd-br'>
                            <button className='dadd-button-24rt' >Submit</button>
                          </div>

                      </div>
                      </div>
                      <br></br>
                  </div>
                      
                </div>
              
              </div>
              
            </div>

          </form>

        </div> 
  )
}
export default AddPatient;

