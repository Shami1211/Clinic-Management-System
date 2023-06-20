//view profiles
import React from 'react'
import "./DoctorViewProfile.css"
const DoctorViewProfile = (props) => {
    const {name,dob,age,mobileNo,email,clinic,unit,specialization} = props.doctor;
  return (
    <div className='ama-doc-card'>
        
        <card-1><b><div className='ama-card-nm1'>Full Name:</div></b> <div className='ama-card-nm'>{name}</div></card-1><br/>
        
        <card-1><b><div className='ama-card-nm1'>Date Of Birth:</div></b> <div className='ama-card-nm'>{dob}</div></card-1><br/>
        
        <card-1><b><div className='ama-card-nm1'>Age:</div></b> <div className='ama-card-nm'>{age}</div></card-1><br/>
        
        <card-1><b><div className='ama-card-nm1'>Mobile No:</div></b> <div className='ama-card-nm'>{mobileNo}</div></card-1><br/>
        
        <card-1><b><div className='ama-card-nm1'>Email:</div></b> <div className='ama-card-nm'>{email}</div> </card-1><br/>
        
        <card-1><b><div className='ama-card-nm1'>Clinic:</div></b> <div className='ama-card-nm'>{clinic}</div></card-1><br/>
        
        <card-1><b><div className='ama-card-nm1'>Unit:</div></b> <div className='ama-card-nm'>{unit} </div></card-1><br/>
        
        <card-1 ><b><div className='ama-card-nm1'>Specialization:</div></b> <div className='ama-card-nm'>{specialization} </div></card-1>
        
    </div>
  )
};

export default DoctorViewProfile;