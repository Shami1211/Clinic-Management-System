import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios'
import PatientReport from './PatientReport';
import { useParams } from 'react-router-dom';
import {useReactToPrint} from 'react-to-print';
import Icon from '../Patient/Photos/Icon.png';
import './Styles/PatientReport.css';
import ReceptionHeader from './ReceptionHeader'

const PatientReports = () =>{

    
    const[patients, setPatients] = useState();
    const regDate = useParams().regDate;  //date which system will fetch according to 

    useEffect(()=>{

        const fetchHandler = async() =>{
            
            await axios.get(`http://localhost:5000/patients/getByRegDate/${regDate}`)  //add id before running
            .then((res => res.data))
            .then(data=>setPatients(data.patients));
        };
        fetchHandler();
    },[regDate]);

    console.log(patients);

    //function to handle printing process
    const repRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => repRef.current,
        documentTitle: 'Daily Patient Report',
        onafterprint: ()=> alert('Printed Successfully')
    });

    return( 
        <div>
                    <ReceptionHeader/><br/><br/><br/>
            <div className='Dreport-1rt'>

                <div className='Dreport-full' ref={repRef}>

                    <div className='report-3'>


                        <h1 className='hom-h9'>District General Hospital-Gampaha </h1>
                        <h2 className='hom-h'>දිස්ත්‍රික් මහ රෝහල-ගම්පහ</h2>
                        <h2 className='hom-h'>மாவட்ட பொது வைத்தியசாலை-கம்பஹா</h2>
                        <div className='imgg'>
                            <img src={Icon}  alt="signin logo"  width={"20%"}/> 
                        </div>
                        <div className='Dreport-3'>

                        <h1 className='report-1-nw'>Patient Details Report</h1>
                    
                            <table >
                                <th>
                                    
                                    <tr >

                                        <td className='patientreport-td1'><h3 className='patientreport-h3'>Registration Number</h3></td>
                                        <td className='patientreport-td2'><h3 className='patientreport-h3'>Name</h3></td>
                                        <td className='patientreport-td3'><h3 className='patientreport-h3'>NIC number</h3></td>
                                        <td className='patientreport-td4'><h3 className='patientreport-h3'>Clinic</h3></td>
                                    </tr> 
                                
                                

                                    {patients && patients.map((patient,i) =>(
                                        
                                        <PatientReport patient = {patient}/>
                                        
                                    ))}
                                </th>
                            </table>
                        </div>
                        <br/><br/>

                    </div>
                </div>

                <br/>

                <div className='report-b'>
            <button className='report-button-24' onClick={handlePrint} >Download Report</button>
          </div>

                <br/>
            </div>

        </div>
    
    )
}

export default PatientReports;
