//daily report 
import axios from 'axios';
import {FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenerateReport.css';
import { jsPDF } from "jspdf"; //library
import DoctorHeader from './DoctorHeader';


const GenerateReport = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        date:'',
        name:'',
        clinic:'',
        count:''
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };
    
  const sendRequest = async() => {
    await axios.put(`http://localhost:5000/doctors`,{
        date: String(inputs.date),
        name: String(inputs.name),
        clinic: String(inputs.clinic),
        count: Number(inputs.count),
    }).then(res=>res.data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history("/viewDoctors"));

        const doc = new jsPDF();

        
        // Set font style
        doc.setFont("Helvetica", "bold");
        

        // Add report subtitle
        doc.setFontSize(18);
        doc.text("Daily Patient Report", 72, 26, { align: "center" });
        
        // Add report title
        doc.setTextColor("#000000");
        doc.setFontSize(20);
        doc.setFont("Helvetica", "normal");
        doc.text("District General Hospital, Gampaha.", 98, 14, { align: "center" });

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Doctor's Details", 40, 55, { align: "center" });
  
        const imgData = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_Sri_Lanka.svg/1200px-Emblem_of_Sri_Lanka.svg.png';
        doc.addImage(imgData, 'PNG', 10, 8, 20, 28);
  
        doc.setTextColor("black");


        // Add Border
        doc.rect(5, 5, 200, 285, 'S', 'black', '50')
        
        
        
        // Add report details
        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        
        
        doc.text("Doctor's Name:", 50, 75);
        doc.text(inputs.name, 90, 75);
        
        doc.text("Clinic:", 50, 95);
        doc.text(inputs.clinic, 90, 95);


        doc.setFont("Helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Today Patient Count", 46, 130, { align: "center" });

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text("No of Patient:", 50, 150);
        doc.text(inputs.count, 90, 150);


        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text("Date", 158, 193);
        doc.text(inputs.date, 151, 185);
        
        const currentDate = new Date();
        const fileName = `Daily_Report ${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}.pdf`;
        doc.save(fileName);

}; 


// report 
return (
<div>

    <DoctorHeader/><br/><br/>

    <h2 className='ama-report-topic'>
    Daily Report
    </h2>

    <form className="ama-generate-all" onSubmit={handleSubmit}>
                <div className="ama-daily-form">
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent={'center'} 
                    maxWidth={700} 
                    alignContent={"center"} 
                    alignSelf="center" 
                    marginLeft={"auto"} 
                    marginRight= 'auto' 
                    marginTop={0}>
                    <FormLabel style={{paddingRight:"525px", fontFamily:"Oswald"}}>Date</FormLabel>
                    <TextField type='date'
                        value={inputs.date} 
                        onChange={handleChange} 
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="date"
                        required="true"/><br/>
                    <FormLabel style={{paddingRight:"465px", fontFamily:"Oswald"}}>Doctor's Name</FormLabel>
                    <TextField 
                        value={inputs.name} 
                        onChange={handleChange}  
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="name"
                        required="true"
                        placeholder="Enter doctor's full name"/><br/>
                    <FormLabel style={{paddingRight:"510px", fontFamily:"Oswald"}}>Clinic</FormLabel><br/>
                        <Select 
                        labelId="demo-simple-select-label" 
                        id="demo-simple-select" 
                        value={inputs.clinic} 
                        onChange={handleChange} 
                        name="clinic"
                        required="true"
                        sx={{mb: 3, width:"550px"}}><br/>
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
                        </Select><br/>
                    <FormLabel style={{paddingRight:"470px", fontFamily:"Oswald"}}>Patient Count</FormLabel>
                    <TextField 
                        value={inputs.count} 
                        onChange={handleChange}  
                        margin="normal" 
                        fullWidth 
                        variant="outlined" 
                        name="count"
                        required="true"
                        placeholder='Enter total of the patient'/><br/>

                    <div className='ama-dadd-b'>
                            <button className='ama-dadd-button-24'>Submit</button>
                    </div>

            </Box>
            </div>
        </form>                
</div>    
  )
}

export default GenerateReport;

