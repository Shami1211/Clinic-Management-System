
import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom'





const LabPrescription = (props) => {
    const history = useNavigate()
    const{_id,patientRegNo,aptDate,drg1Name,drg1Dosage,drg2Name,drg2Dosage,drg3Name,drg3Dosage,drg4Name,drg4Dosage,
          drg5Name,drg5Dosage,drg6Name,drg6Dosage,drg7Name,drg7Dosage,drg8Name,drg8Dosage,duration,
          lab1,lab2,lab3,lab4,lab5,remarks,nextApt} = props.prescription;

    

  return (
 

<div className='b'>

     
<div className=' Dform-ball'>
          
  <div className='Dform-Min'>
    <br></br>
    <div class="Dform-row">
          
      <div className='Dform-fullbox'>

        <div className='Dform-from'>
                                      
          <div className='Dform-f'>
            
            <h1 className='h345'>Prescription</h1>
 
      
        <div className='Dform-h3'>Pateint ID: <div className='Dform-in'>{patientRegNo}</div></div>
        <div className='Dform-h3'> Prescription ID: <div className='Dform-in'>{_id}</div></div>
        <div className='Dform-h3'>Appointment Date: <div className='Dform-in'>{aptDate}</div></div>
        <label className='Dform-h3' >Recommended Drugs:</label>
          <tr>
            <td className='Dform-in'>{drg1Name}</td>
            <td className='Dform-in'>{drg1Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg2Name}</td>
            <td className='Dform-in'>{drg2Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg3Name}</td>
            <td className='Dform-in'>{drg3Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg4Name}</td>
            <td className='Dform-in'>{drg4Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg5Name}</td>
            <td className='Dform-in'>{drg5Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg6Name}</td>
            <td className='Dform-in'>{drg6Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg7Name}</td>
            <td className='Dform-in'>{drg7Dosage}</td>
          </tr>
          <tr>
            <td className='Dform-in'>{drg8Name}</td>
            <td className='Dform-in'>{drg8Dosage}</td>
          </tr>
        
        
        <div className='Dform-h3'>Medicines For:  {duration} Days</div>
        <label className='Dform-h3'>Recommended Lab Tests:</label>
        <div className='Dform-in'>{lab1}</div>
        <div className='Dform-in'>{lab2}</div>
        <div className='Dform-in'>{lab3}</div>
        <div className='Dform-in'>{lab4}</div>
        <div className='Dform-in'>{lab5}</div>
        <div className='Dform-h3'>Remarks:<h1  className='Dform-in'>{remarks}</h1></div>
        <div className='Dform-h3'>Next Appointment in: {nextApt} Months</div>
        <br/><br/>
        <table className='Dform-b'>


                <tr>
                  <th><Link to={`/pproforlab/${patientRegNo}`}class="form-button-4">Back</Link></th>
                  <th className='w'></th>
                  <th><Link to={`/labadd/${patientRegNo}`}class="form-button-4">New Test</Link></th> 
                </tr>
                  </table>


    </div>
    </div>
    </div>
    </div></div></div></div>
    
  )
}

export default LabPrescription ;