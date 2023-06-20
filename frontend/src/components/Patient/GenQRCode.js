import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import QRCode from 'qrcode';
import { useReactToPrint } from 'react-to-print';
import ReceptionHeader from './ReceptionHeader';
import Icon from '../Patient/Photos/Icon.png';
import '../Patient/Styles/PatientID.css';

const PatientQRCode = (props) => {

    const [qrCode, setQRCode] = useState('');
    const [patients,setPatients] = useState({});
    const patientId = useParams().id;
  
    useEffect(() => {
      const generateQRCode = async () => {
        const qrCodeData = `${patientId}`;
        const qrCode = await QRCode.toDataURL(qrCodeData);
        setQRCode(qrCode);
      };
      generateQRCode();


      //used to fetch data accoding to patient ID
      const fetchHandler = async() =>{
        await axios
        .get(`http://localhost:5000/patients/viewPatient/${patientId}`)
        .then((res)=>res.data)
        .then(data=>setPatients(data.patient));
      }; 
      fetchHandler();
    }, [patientId]);

    const repRef = useRef();

    //used to take print out of patient ID card
    const handlePrint = useReactToPrint({
        content: () => repRef.current,
        documentTitle: 'Patient Id',
        onafterprint: ()=> alert('Printed Successfully')
    });
  
    return (
      <div>
        <ReceptionHeader/><br/><br/><br/>
          <div className='patientId-1'>
            <div className='patientId-full' ref={repRef}>

                    {patients && (
                      <div>
                        <table border={1}>
                          <tr>
                            <td className='patientId-td2'><img src={Icon}  alt="signin logo" width={"29%"}/> </td>
                            <td className='patientId-td1'><h5 className='patientId-11'>දිස්ත්‍රික් මහ රෝහල-ගම්පහ</h5></td>
                          </tr>
                          <tr>
                            <td className="patientId-td3"  width={"260px"}><label><b>Patient Name:</b> {patients.patientName}</label></td>
                            <td rowSpan="3"><img src={qrCode} alt="Patient QR Code" /></td>
                          </tr>
                          <tr>
                            <td className="patientId-td3" width={"260px"}><label><b>Patient Contact:</b> 0{patients.patientContact}</label></td>
                          </tr>
                          <tr>
                            <td className="patientId-td3" width={"260px"}><label><b>Patient NIC:</b> {patients.patientNIC}</label></td>
                          </tr>
                          <tr>
                            <td colSpan={2}><label className='idNotice'>නැවත පැමිණෙන විට මෙම කාඩ්පත රැගෙන පැමිණීම අනිවාර්යවේ.</label></td>
                          </tr>
                        </table>
                      </div>
                    )}
            </div>
            <br/>
            <div className='patientId-b'>
              <button className='patientId-button-24' onClick={handlePrint} >Print ID</button>
            </div><br/>
            <div>
              <Link to={`/viewPatientProfileForReception/${patientId}`} className='patientId-button-24'>Back</Link>
            </div>
          </div>
      </div>
    );
  }
  
  export default PatientQRCode;