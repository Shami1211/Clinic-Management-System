import {
  MenuItem,
  Select
} from "@mui/material";
import Header from '../Header';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../CSS/CreateReport.css';

const CreateReport = () => {

  const history = useNavigate();
 //Get Inputs
  const[inputs, setInputs] = useState({
    name: "",
    age: "",
    gender: "",
    clinic: "",
    reportedDate: "",
    specimenNo: "",
    result: "",
    conclusion: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/reportsGenerate", {
        name: String(inputs.name),
        age: String(inputs.age),
        gender: String(inputs.gender),
        clinic: String(inputs.clinic),
        reportedDate: String(inputs.reportedDate),
        specimenNo: String(inputs.specimenNo),
        result: String(inputs.result),
        conclusion: String(inputs.conclusion)
      })
      .then((res) => res.data);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
    .then(alert("Report Added Successfully"))
    .then(() => history("/generatereports"));
  };

  return (
    <div>

       <Header/><br></br><br></br><br></br><br></br>

      <div className=' form-ball'>

        <div className='form-Main-nwr'>

          <div class="Aform-row1rlb">

            <div className='form-fullboxr'>
          
              <h2 className='form-h22r'>Add Report</h2>

                <form className="form-fromr" onSubmit={handleSubmit}>

                  <div className='form-fr'>

                    <h3 className='form-h3r'>Patient Registration Number</h3>
                    <div  className='form-inr'>
                      <input className="add-put-bnr" value={inputs.name} placeholder="Enter Name" onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="name" />
                    </div>

                  <tr>
                    <td>
                      <h3 className='form-h3r'>Patient Name</h3 >
                        <div className='form-inr'>
                          <input className="add-put-dtrtd" value={inputs.age} placeholder="Enter Age" onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="age" />
                        </div>
                    </td>

                    <td>
                      <h3 className='form-h3r'>Gender</h3>
                        <div className='form-inr'>
                        <Select 
                        className="add-put-dtrtd"
                          labelId="demo-simple-select-label" 
                          id="demo-simple-select"  
                          value={inputs.gender} 
                          onChange={handleChange} 
                          name="gender"
                          sx={{mb: 3}}>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          </Select>
                        </div>

                    </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h3 className='form-h3r'>Clinic</h3 >
                                        <div className='form-inr'>
                                        <Select 
                                      className="add-put-dtrtd"
                                      labelId="demo-simple-select-label" 
                                      id="demo-simple-select" 
                                      value={inputs.clinic} 
                                      onChange={handleChange} 
                                      name="clinic"
                                      required="true"
                                      sx={{mb: 3}}><br/>
                                      <MenuItem value="Surgical">Surgical Clinic</MenuItem>
                                      <MenuItem value="Medical">Medical Clinic</MenuItem>
                                      <MenuItem value="Gynecology">Gynecology Clinic</MenuItem>
                                      <MenuItem value="Maternity">Maternity Clinic</MenuItem>
                                      <MenuItem value="Children">Children Clinic</MenuItem>
                                      <MenuItem value="Suva-Daru">Suva-Daru Clinic</MenuItem>
                                      <MenuItem value="Cardiology">Cardiology Clinic</MenuItem>
                                      <MenuItem value="ENT">ENT Clinic</MenuItem>
                                      <MenuItem value="Skin">Skin Clinic</MenuItem>
                                      <MenuItem value="Psychology">Psychology Clinic</MenuItem>
                                      <MenuItem value="Urogenital">Urogenital Clinic</MenuItem>
                                      <MenuItem value="Kidney">Kidney Clinic</MenuItem>
                                      <MenuItem value="Neurology">Neurology Clinic</MenuItem>
                                      <MenuItem value="Hormonal">Hormonal Clinic</MenuItem>
                                      <MenuItem value="Family">Family Clinic</MenuItem>
                                      <MenuItem value="Eye">Eye Clinic</MenuItem>
                                      <MenuItem value="Respiratory">Respiratory Clinic</MenuItem>
                                      <MenuItem value="Chest">Chest Clinic</MenuItem>
                                      <MenuItem value="Ingout">Ingout Clinic</MenuItem>
                                      <MenuItem value="Cancer">Cancer Clinic</MenuItem>
                                      <MenuItem value="Orthopedics">Orthopedics Clinic</MenuItem>
                                      <MenuItem value="OMF">OMF Clinic</MenuItem>
                                      <MenuItem value="Dental">Dental Clinic</MenuItem>
                                      </Select>
                                        </div>
                                      </td>

                                      <td>
                                        <h3 className='form-h3r'>Test Name</h3 >
                                        <div className='form-inr'>
                                          <input className="add-put-dtrtd" value={inputs.testName} placeholder="Enter Test Name" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="testName" />
                                        </div>
                                      </td>
                                    </tr>
                      
                                    <tr>
                                      <td>
                                        <h3 className='form-h3r'>Reported Date</h3 >
                                        <div className='form-inr'>
                                          <input className="add-put-dtrtd" type={'date'} value={inputs.reportedDate} placeholder="Enter Name" onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="reportedDate" />
                                        </div>
                                      </td>

                                      <td>
                                        <h3 className='form-h3r'>Specimen No</h3 >
                                        <div className='form-inr'>
                                          <input className="add-put-dtrtd" value={inputs.specimenNo} placeholder="17HS" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="specimenNo" />
                                        </div>
                                      </td>
                                    </tr>

                
                                    <tr>
                                      <td>
                                        <h3 className='form-h3r'>Result</h3 >
                                        <div className='form-inr'>
                                          <input className="add-put-dtrtd" value={inputs.result} placeholder="Enter" onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="result" />
                                        </div>
                                      </td>

                                      <td>
                                        <h3 className='form-h3r'>conclusion</h3 >
                                        <div className='form-inr'>
                                          <input className="add-put-dtrtd" value={inputs.conclusion} placeholder="Enter" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="conclusion" />
                                        </div>
                                      </td>
                                    </tr>

                                        <br></br>
                                    
                                    <div className='dadd-br'>
                                      <button className='dadd-button-24rt' type="submit">Submit</button>
                                    </div>

                  </div>

              <br></br>

                </form>

            </div>

            
          </div>

        </div>

      </div>

    </div>
  );
};
export default CreateReport;