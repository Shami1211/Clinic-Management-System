import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, /*useNavigate,*/ useParams} from 'react-router-dom'
import './Styles/PatientProfileForDoc.css';
import ReceptionHeader from './ReceptionHeader'


//This page will be displayed after scanning the QR code
const PatientProfileForReception = (props) => {

  const [elements,setElements] = useState({});
  const id = useParams().id;
  //const history = useNavigate();

  //fetches data from database according to the ID
  useEffect(() => {
    const fetchHandler = async() =>{
      await axios
      .get(`http://localhost:5000/patients/viewPatient/${id}`)
      .then((res)=>res.data)
      .then(data=>setElements(data.patient));
    };
    fetchHandler();
  },[id])


    
  return (
    
    <div>
      <ReceptionHeader/><br/><br/><br/>
      {elements && (
        <div className='ppfordoc'>
          <div className='ppfordoc-main'>
            <h1 className='ppfordoc-h1'>Patient Profile</h1><br/>
            
            {/*<td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Patient Registration Number: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements._id}</label></td><br/>*/}

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Name: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.patientName}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Date of Birth: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.patientdob}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>NIC: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.patientNIC}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Clinic: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.clinic}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Gender: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.gender}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Contact Number: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>0{elements.patientContact}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Address: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.patientAddress}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Guardian: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.guardian}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Realationship: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.relationship}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>Guardian Contact: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>0{elements.guardContact}</label></td><br/>

            <td className='ppfordoc-td'><h3 className='ppfordoc-h3'>AGA Division: </h3></td>
            <td className='ppfordoc-td'><label className='ppfordoc-label'>{elements.division}</label></td><br/>

            <div className= 'ppfordoc-btn'>
              <Link to={`/addAppointment/${id}`} className="ppfordoc-button">Add New Appointment</Link><br/><br/>
              <Link to={`/appointments/scaned/${id}`} className="ppfordoc-button">View Previous Appointments</Link><br/><br/>
              <Link to={`/viewPatientUpdate/${id}`} className="ppfordoc-button">Update Patient Details</Link><br/><br/>
              <Link to={`/viewLabPrescriptions/${id}`} className="ppfordoc-button">View Prescriptions</Link><br/><br/>
              <Link to={`/genQRCode/${id}`} className='ppfordoc-button'>Generate QR</Link>
              
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default PatientProfileForReception;
