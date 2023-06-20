import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './clinicReportHome.css'
import ClinicService from '../../services/clinicService';
import {
    FormControl,
    Select,
    MenuItem,
    Button,
  } from "@mui/material";
  import ClinicHeader from '../Clinics/ClinicHeader';

function ClinicReportHome() {
    const navigate = useNavigate();
    const [clinicName, setClinicName] = useState("");
    let patientsByClinic;
    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate("/clinic/viewReport", {state: {clinicName: clinicName}})
        // ClinicService.getPatientsByClinic(clinicName).then(
        //     (response) =>{
        //         patientsByClinic = response.data
        //         console.log(patientsByClinic)
        //         navigate("/clinic/viewReport", {state: {patients: patientsByClinic, clinicName: clinicName}})
        //     },
        //     (error)=>{
        //         alert(error.response.data.message)
        //     }
        // )
    }

  return (
    <div>
      <ClinicHeader></ClinicHeader>
    <div className='clinic-report-home-container'>
        <div className='clinic-report-home-form-container'>
            <h2 className='select-clinic-title'>SELECT A CLINIC</h2>
            <form className='clinic-report-home-form' onSubmit={handleSubmit}>
            <FormControl>
            <Select
              className='select-clinic'
              label="Clinic"
              value={clinicName}
              onChange={(event) => setClinicName(event.target.value)}
              required
            >
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
            </FormControl>
            <br/>
            <Button 
            sx={{ m: 0.5, width: 240, backgroundColor: '#0fb88f', fontSize: 20, fontWeight: 900}} 
            variant="contained" type="submit">
            Generate Report
          </Button>

            </form>

        </div>
    </div>
    </div>
  )
}

export default ClinicReportHome