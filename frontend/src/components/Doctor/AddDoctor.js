import { Checkbox, FormControlLabel, FormLabel, TextField  } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddDoctor.css';
import DocAdminHeader from './DocAdminHeader';
import Swal from 'sweetalert2';
import { isValid } from 'date-fns';


const AddDoctor = () => {
  const history = useNavigate();
  const [isDateOfBirthValid, setDateOfBirthValid] = useState(true);

  const [inputs, setInputs] = useState({
    name: "",
    dob: "",
    age: "",
    mobileNo: "",
    email: "",
    clinic:"",
    unit: "",
    specialization: "",
  });
  //agree condition
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
      [e.target.name]: e.target.value,
    }));
    if (name === 'dob') {
      const isValidDate = isValid(new Date(value));
      setDateOfBirthValid(isValidDate);
    }
  };


  //send request and go to database
  const sendRequest = async() => {
    await axios.post("http://localhost:5000/doctors" ,{
      name: String(inputs.name),
      dob: String(inputs.dob),
      age: Number(inputs.age),
      mobileNo: String(inputs.mobileNo),
      email: String(inputs.email),
      clinic: String(inputs.clinic),
      unit: String(inputs.unit),
      specialization: String(inputs.specialization),
      condition: Boolean(checked)
    }).then(res => res.data)
    Swal.fire({
      icon: 'success',
      title: 'Added Successfully',
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    //form validation-contact number
    if (inputs.mobileNo.length !== 10 ){
      Swal.fire({
        icon: 'error',
        title: 'Contact Number Invalid',
      });
      return;
    }
    //setting validation for the email
    if (!inputs.email.endsWith("@gmail.com")) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email !',
      });
  return;
    }
    console.log(inputs, checked);
    sendRequest().then(()=>history('/viewDoctors'))
  };

  //add form
  return (
    <div>
      <DocAdminHeader/><br/><br/>
    <div>
        <h2 className="ama-add-topic">
          Add a Doctor
        </h2>

          
          <form className="ama-add-all" onSubmit={handleSubmit} autoComplete="off">
                <div className="ama-add-form">
                <Box 
                    display="flex" 
                    textTransform={'none'}
                    flexDirection="column" 
                    justifyContent={'center'} 
                    maxWidth={700} 
                    alignContent={"center"} 
                    alignSelf="center" 
                    marginLeft={"auto"} 
                    marginRight= 'auto' 
                    marginTop={0}>
                    <FormLabel style={{paddingRight:"625px", fontFamily:"Oswald"}}>Full Name</FormLabel>
                    <TextField 
                        style={{fontFamily:"Oswald"}}
                        value={inputs.name} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="name"
                        required="true"
                        placeholder='Enter your full name'/><br/>
                    <FormLabel style={{paddingRight:"605px", fontFamily:"Oswald"}}>Date Of Birth</FormLabel>
                    <TextField
                        type="date"
                         value={inputs.dob}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="dob"
                        required
                        error={!isDateOfBirthValid}
                        helperText={!isDateOfBirthValid ? 'Invalid date of birth' : ''}/><br/>
                    <FormLabel style={{paddingRight:"660px", fontFamily:"Oswald"}}>Age</FormLabel>
                    <TextField 
                        value={inputs.age} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="age"
                        required="true"
                        placeholder='Enter your age'/><br/>
                    <FormLabel style={{paddingRight:"625px", fontFamily:"Oswald"}}>Mobile No</FormLabel>
                    <TextField 
                        value={inputs.mobileNo} 
                        onChange={handleChange}  
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="mobileNo"
                        required="true"
                        placeholder='Enter your contact number'/><br/>
                    <FormLabel style={{paddingRight:"655px", fontFamily:"Oswald"}}>Email</FormLabel>
                    <TextField 
                        value={inputs.email} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="email"
                        required="true"
                        sx={{mb: 3}}
                        placeholder='example@gmail.com'/>
                    <FormLabel style={{paddingRight:"655px", fontFamily:"Oswald"}}>Clinic</FormLabel><br/>
                        <Select 
                        labelId="demo-simple-select-label" 
                        id="demo-simple-select" 
                        value={inputs.clinic} 
                        onChange={handleChange} 
                        name="clinic"
                        required="true"
                        sx={{mb: 3, width:"690px"}}><br/>
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
                        <FormLabel style={{paddingRight:"660px", fontFamily:"Oswald"}}>Unit</FormLabel><br/>
                        <Select 
                        labelId="demo-simple-select-label" 
                        id="demo-simple-select"  
                        value={inputs.unit} 
                        onChange={handleChange} 
                        name="unit"
                        required="true"
                        sx={{mb: 3, width:"690px"}}>
                        <MenuItem value="Surgical" >Surgical Unit</MenuItem>
                        <MenuItem value="Medical" >Medical Unit</MenuItem>
                        <MenuItem value="Gynecology" >Gynecology Unit</MenuItem>
                        <MenuItem value="Family Medical" >Family Medical Unit</MenuItem>
                        <MenuItem value="Pediatrics" >Pediatrics Unit</MenuItem>
                        <MenuItem value="Orthopedic" >Orthopedics Unit</MenuItem>
                        </Select>
                    <FormLabel style={{paddingRight:"600px", fontFamily:"Oswald"}}>Specialization</FormLabel>
                    <TextField 
                        value={inputs.specialization} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="specialization"
                        required="true"
                        placeholder='Enter your specialization'/><br/>
                    
                    <FormControlLabel style={{paddingRight:370, fontFamily:"Oswald"}} control={<Checkbox  checked = {checked} onChange={()=>setChecked(!checked)}/>} label="I agree with the terms and conditions"  /><br/>
                        
                   
                    <div className='ama-dadd-b'>
                            <button className='ama-dadd-button-24'>Register</button>
                          </div>
                </Box>
                </div>
            </form>
        
    </div>
    </div>
  )
}  


export default AddDoctor;