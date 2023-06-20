//update form
import axios from 'axios';
import { FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DocAdminHeader from './DocAdminHeader';
import './DoctorDetail.css';
import Swal from 'sweetalert2';


//update details
const DoctorDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
const history = useNavigate();
    useEffect(() => { 
        const fetchHandler = async() => {
            await axios
                .get(`http://localhost:5000/doctors/${id}`)
                .then((res) => res.data)
                .then(data=>setInputs(data.doctor));
    };
    fetchHandler()
  },[id]);
     
    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/doctors/${id}`,{
            name: String(inputs.name),
            mobileNo: String(inputs.mobileNo),
            clinic: String(inputs.clinic),
            unit: String(inputs.unit),
            specialization: String(inputs.specialization),
            
        }).then(res=>res.data)
    };
   const handleSubmit = (e) => {
        e.preventDefault();
        //form validation - contact number
        if (inputs.mobileNo.length !== 10 ){
            alert("Contact number should have 10 characters");
            return;
          }
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
          });
        sendRequest().then(()=>history("/viewDoctors"))
   }; 
   const handleChange = (e) => {
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
   };
   return (
    <div>
    <DocAdminHeader/><br/><br/>
    <div>
         <h2 className='ama-update-topic'>
          Doctor's Profile
         </h2>

        {inputs && (
            <form className="ama-update-all" onSubmit={handleSubmit} autoComplete='off'>
                <div className="ama-update-form">
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent={'center'} 
                    maxWidth={700} 
                    alignContent={"center"} 
                    alignSelf="center" 
                    marginLeft={"auto"} 
                    marginRight= 'auto' 
                    marginTop={5}>
                    <FormLabel style={{paddingRight:"615px", fontFamily:"Oswald"}}>Full Name</FormLabel>
                    <TextField 
                        value={inputs.name} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="name"
                        placeholder='Enter your full name'/><br/>
                    <FormLabel style={{paddingRight:"615px", fontFamily:"Oswald"}}>Mobile No</FormLabel>
                    <TextField 
                        value={inputs.mobileNo} 
                        onChange={handleChange}  
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="mobileNo"
                        placeholder='Enter your contact number'/><br/>
                    <FormLabel style={{paddingRight:"640px", fontFamily:"Oswald"}}>Clinic</FormLabel><br/>
                        <Select 
                        labelId="demo-simple-select-label" 
                        id="demo-simple-select" 
                        value={inputs.clinic} 
                        onChange={handleChange} 
                        name="clinic"
                        sx={{mb: 3, width:"680px"}}><br/>
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
                        <FormLabel style={{paddingRight:"645px", fontFamily:"Oswald"}}>Unit</FormLabel><br/>
                        <Select 
                        labelId="demo-simple-select-label" 
                        id="demo-simple-select"  
                        value={inputs.unit} 
                        onChange={handleChange} 
                        name="unit"
                        sx={{mb: 3, width:"680px"}}><br/>
                        <MenuItem value="Surgical">Surgical Unit</MenuItem>
                        <MenuItem value="Medical">Medical Unit</MenuItem>
                        <MenuItem value="Gynecology">Gynecology Unit</MenuItem>
                        <MenuItem value="Family Medical">Family Medical Unit</MenuItem>
                        <MenuItem value="Pediatrics">Pediatrics Unit</MenuItem>
                        <MenuItem value="Orthopedic">Orthopedics Unit</MenuItem>
                        </Select><br/>
                    <FormLabel style={{paddingRight:"595px", fontFamily:"Oswald"}}>Specialization</FormLabel>
                    <TextField 
                        value={inputs.specialization} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="specialization"
                        placeholder='Enter your specialization'/><br/>
                    
                    
                        
                    
                    <div className='ama-dadd-b'>
                            <button className='ama-dadd-button-24'>Update</button>
                          </div>
                </Box>
                </div>
            </form>
        )}
    </div>
    </div>
  )
}

export default DoctorDetail;

