import {React, useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import ClinicService from '../../services/clinicService';
import './updateClinic.css'
import ClinicHeader from './ClinicHeader';


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

function UpdateClinic() {
    const navigate = useNavigate();
    const componentLocation = useLocation();

    const clinicToUpdate = componentLocation.state?.clinicData;

    // Initialize state for form fields
    const [clinicID, setClinicID] = useState("");
    const [clinicName, setClinicName] = useState("");
    const [day, setDay] = useState("");
    const [startTime, setStartTime] = useState(dayjs());
    const [endTime, setEndTime] = useState(dayjs());
    const [location, setLocation] = useState("");


    useEffect(() => {
      
      if (!clinicToUpdate) {
        navigate('/clinic/viewClinics');
      }
      else{
        //Format times to be shown in form fields
        let startHour = clinicToUpdate.startTime.split(":")[0];
        let startMinute = clinicToUpdate.startTime.split(":")[1].split(" ")[0];
        const startMeridian = clinicToUpdate.startTime.split(":")[1].split(" ")[1];

        if(startMeridian === "PM"){
          startHour = Number(startHour);
          startHour += 12;
          if(startHour === 24){
            startHour = 12;
          }
        }

        let endHour = clinicToUpdate.endTime.split(":")[0];
        let endMinute = clinicToUpdate.endTime.split(":")[1].split(" ")[0];
        const endMeridian = clinicToUpdate.endTime.split(":")[1].split(" ")[1];

        if(endMeridian === "PM"){
          endHour = Number(endHour);
          endHour += 12;
          if(endHour === 24){
            endHour = 12;
          }
        }
        // Initialize state for form fields
        setClinicID(clinicToUpdate._id);
        setClinicName(clinicToUpdate.name);
        setDay(clinicToUpdate.day);
        setStartTime(dayjs().hour(startHour).minute(startMinute));
        setEndTime(dayjs().hour(endHour).minute(endMinute));
        setLocation(clinicToUpdate.location);

        console.log(startHour + "\n" + startMinute + "\n" + endHour + "\n" + endMinute)

      }
    },[clinicToUpdate, navigate]);

    
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

      ClinicService.updateClinic(clinicID,clinicData).then(
        (response) => {
          console.log(response.data)
          navigate('/clinic/viewClinics')
        },
        (error) => {
          console.log(error)
        }
      )
    };



  return (
    <div>
      <ClinicHeader/>
      <div className='addclinic-container'>
        <div className='addclinic-form-container'>
          <h2 className='add-clinic-form-title'> Update Clinic </h2>

          <form className='add-clinic-form' onSubmit={handleSubmit}>
            <FormControl sx={{ m: 0.5, width: 370}}>
              <TextField
                fullWidth = {true}
                label="Clinic Name"
                value={clinicName}
                onChange={(event) => setClinicName(event.target.value)}
              />
            </FormControl>
            <br />
            <FormControl sx={{ m: 0.5, width: 370}}>
            <InputLabel>Day</InputLabel>
              <Select
                fullWidth = {true}
                label="Day"
                value={day}
                onChange={(event) => setDay(event.target.value)}
              >
                <MenuItem value="">Select a day</MenuItem>
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
            
            <FormControl sx={{ m: 0.5, width: 370}}>
              <TextField
                fullWidth = {true}
                label="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </FormControl>
            <br />
            <Button 
            sx={{ m: 0.5, width: 120, backgroundColor: '#006c61', fontSize: 20, fontWeight: 900}} 
            variant="contained" type="submit">
              UPDATE
            </Button>
          </form>
          </div>

          
      </div>
    </div>
  )
}

export default UpdateClinic