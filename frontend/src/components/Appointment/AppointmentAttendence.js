import React from 'react'

const AppointmentAttendence = (props) => {

    const { patient_id, patient_name, contact_number, slot_number, appoinment_date, appoinment_time} = props.attendence;

  return (
 

<div>
      <div>


          <div className='report-tb111' >
            <td className='report-tp-id'><h3 className='report-h3'>{patient_id}</h3></td>
            <td className='report-tp-nm'><h3 className='report-h3' >{patient_name}</h3></td>
            <td className='report-tp-nm'><h3 className='report-h3'>{contact_number}</h3></td>
            <td className='report-tp-nm'><h3 className='report-h3' >{slot_number}</h3></td>
            <td className='report-tp-nm'><h3 className='report-h3'>{appoinment_date}</h3></td>
            <td className='report-tp-nm'><h3 className='report-h3' >{appoinment_time}</h3></td>
            </div>
   

      </div>
</div>
  )
}

export default AppointmentAttendence
