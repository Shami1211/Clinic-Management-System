import React, { useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
import Icon from "./photos/Icon.png";
import { useNavigate } from 'react-router-dom'
import AppointmentAttendence from "./AppointmentAttendence"
import AppointmentHome02nav from "./AppointmentHome02/AppointmentHome02nav"
const URL = "http://localhost:5000/attendence";


const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data)
}

function ReportForm() {

  const [appointmentAttendence, setappointmentAttendence] = useState();
  useEffect (() => {

    fetchHandler().then(data => setappointmentAttendence(data.appointmentAttendence))
  },[]);
  console.log(appointmentAttendence)

  const history = useNavigate();

  const componentRef = useState();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'patient-attendence',
    onAfterPrint: ()=> alert('Print Succsess')
  });

  const deleteHandler = () => {
    axios.delete(`http://localhost:5000/attendence/deleteAttendence`)
        .then(res=>res.data)
        .then(()=> history("/"))
        .then(()=> history("/appointments"));
    }

  return (

<div>
<AppointmentHome02nav/>
<br></br> <br></br> <br></br> <br></br>
    
      <div className='Dreport-123'>

          <div className='Dreport-full-app' ref={componentRef}>

            <div className='report-3'>

              <h1 className='hom-h9'>District General Hospital-Gampaha </h1>
              <h2 className='hom-h'>දිස්ත්‍රික් මහ රෝහල-ගම්පහ </h2>
              <h2 className='hom-h'>மாவட்ட பொது வைத்தியசாலை-கம்பஹா</h2>

                <div className='imgg'>
                  <img src={Icon} alt="signin logo"  width={"20%"}/> 
                </div>

                <div className='Dreport-3'>
                    
                  <h1 className='report-1-nw'>Appointments Details Report</h1>
                    
                    <div className='report-tb111' >
              
                      <td className='report-tp-id'><h3 className='report-h3ap'>Patient ID</h3></td>
                     
                      <td className='report-tp-id'><h3 className='report-h3ap'>Patient Name</h3></td>
                     
                      <td className='report-tp-id'><h3 className='report-h3ap'>Phone Number</h3></td>
                     
                      <td className='report-tp-id'><h3 className='report-h3ap'>Slot Number</h3></td>                      
                     
                      <td className='report-tp-id'><h3 className='report-h3ap'>Appointment Date</h3></td>
                     
                      <td className='report-tp-id'><h3 className='report-h3ap'>Appointment Time</h3></td>
            

                    </div>



    
                  <div ref={componentRef} >
                    
                    <div className='appointments'>
                      {appointmentAttendence && appointmentAttendence.map((attendence, i) => (
                        <div key={i}>
                          <AppointmentAttendence attendence={attendence}/>
                        </div>
                      ))}
                    </div>

                  </div>
              
                </div>
              
            </div>
  
          </div>

                                              <br></br>





          <div className='labbtnnr'>
        <tr className='detl' >
            <td className="td-btn">
        <button class="form-button-4078" onClick={handlePrint}>Print Report</button>
      </td>
      <td className='labrf'></td>
      <td className="td-btn" >
        <button class="form-button-2r" onClick={deleteHandler}>Delete Report</button>
      </td>
    </tr>
    </div>

                     <br></br>
      </div>
 </div>
  );
}
  
  
  export default ReportForm