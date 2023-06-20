
import React from 'react';
import {Link} from 'react-router-dom'
import "./Styles/Patient.css";

const Patient = (props) => {

  const{_id,patientName,patientNIC,clinic,division,registrationDate} = props.patient;

  return (
    <tr className='patient-tr'>
        <td className='pat-tb-id'>{_id}</td>
        <td className='pat-tb'>{patientName}</td>
        <td className='pat-tb-nic'>{patientNIC}</td>
        <td className='pat-tb-Clinic'>{clinic}</td>
        <td className='pat-tb-AGA'>{division}</td> 
        <td className='pat-tb-date'>{registrationDate}</td>
        {/*<td className='patient-btn'><Link className='patient-td-btn' to={`/viewPatientProfileForDoc/${_id}`} >Doctor</Link></td>*/}
        <td className='patient-btn'><Link className='patient-td-btn' to={`/viewPatientProfileForReception/${_id}`}>Profile</Link></td>

    </tr>
    
  )
}

export default Patient;