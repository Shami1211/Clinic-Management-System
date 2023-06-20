import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './addClinic.css'
import ClinicService from '../../services/clinicService';
import ClinicHeader from './ClinicHeader'


import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
} from "@mui/material";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

function AddClinic() {

  const navigate = useNavigate();

    // Initialize state for form fields
  const [clinicName, setClinicName] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs());
  const [location, setLocation] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with form data


    const clinicData = 
    {
      name: clinicName,
      day: day,
      startTime:startTime.format("h:mm A"),
      endTime: endTime.format("h:mm A"), 
      location: location
    }

    console.log(clinicData)

    ClinicService.createClinic(clinicData).then(
      (response) => {
        console.log(response.data)
          alert("Clinic Added")
          navigate('/clinic/viewClinics')
      },
      (error) => {
        if(error.response.data.error.message){
          alert(error.response.data.error.message)
        }
        console.log(error.response.data)
      }
    )
  };



  return (
    <div>
      <ClinicHeader/>
      <div className='addclinic-container'>
        <div className='addclinic-form-container'>
          <h2 className='add-clinic-form-title'> Add New Clinic </h2>

          <form className='add-clinic-form' onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, width: 370}}  fullWidth={true}>
              <TextField
                fullWidth={true}
                label="Clinic Name"
                value={clinicName}
                onChange={(event) => setClinicName(event.target.value)}
                
              />
            </FormControl>
            <br />
            <FormControl sx={{ m: 1, width: 370}}>
            <InputLabel>Day</InputLabel>
              <Select
                placeholder="Day"
                fullWidth={true}
                label="Day"
                value={day}
                onChange={(event) => setDay(event.target.value)}
              >
                <MenuItem value="Monday">Monday</MenuItem>
                <MenuItem value="Tuesday">Tuesday</MenuItem>
                <MenuItem value="Wednesday">Wednesday</MenuItem>
                <MenuItem value="Thursday">Thursday</MenuItem>
                <MenuItem value="Friday">Friday</MenuItem>
                <MenuItem value="Saturday">Saturday</MenuItem>
                <MenuItem value="Sunday">Sunday</MenuItem>
              </Select>
            </FormControl>
            <br />
            <div className='add-clinic-time-fields'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl sx={{ m: 0.5, width: 180}}>
                  <TimeField
                    className='add-clinic-time-picker'
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                  />
                        
                </FormControl>
                <FormControl sx={{ m: 0.5, width: 180}}>
                  <TimeField
                    className='add-clinic-time-picker'
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                  />
                </FormControl>
              </LocalizationProvider>
              <br />
            </div>
            
            <FormControl sx={{ m: 1, width: 370}}>
              <TextField
                fullWidth={true}
                label="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </FormControl>
            <br />
            <Button 
            sx={{ m: 0.5, width: 120, backgroundColor: '#006c61', fontSize: 20, fontWeight: 900}} 
            variant="contained" type="submit">
              ADD
            </Button>
          </form>
          </div>

          
      </div>
    </div>
  )
}

export default AddClinic