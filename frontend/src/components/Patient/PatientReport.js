import React from 'react';
import './Styles/PatientReport.css';


//Code to fetch and organized data in a meaningful manner
const PatientReport= (props) => {

  const{_id,patientName,patientNIC,clinic} = props.patient;

  return (
    
    <div >

      
      <div>
        <table border='1'>
          <tr >

    

              <td className='patientreport-td1'><h3 className='patientreport-h3'>{_id}</h3></td>
              <td className='patientreport-td2'><h3 className='patientreport-h3'>{patientName}</h3></td>
              <td className='patientreport-td3'><h3 className='patientreport-h3'>{patientNIC}</h3></td>
              <td className='patientreport-td4'><h3 className='patientreport-h3'>{clinic}</h3></td>

   

          </tr>   
        </table>
      </div>
    </div>
    
  )
}

export default PatientReport;


