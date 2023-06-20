import React, { useRef, useState } from "react";
import QrReader from "react-qr-scanner";
import ReceptionHeader from './ReceptionHeader'
//import DoctorHeader from '../Doctor/DoctorHeader'
import { useNavigate } from "react-router-dom";
import './Styles/ScanDPationQR.css';


const ScanPatientQRRec = () => {
  
  const patientNavigate = useNavigate();
  const qrRef = useRef(null);
  const [qrCodeValue, setQRCodeValue] = useState(null);

    //reception side function to scan patients QR code 


  const handleScan = (data) => {
    if (data) {
      setQRCodeValue(data.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  patientNavigate(`/viewPatientProfileForReception/${qrCodeValue}`)

  return (
    <div>
      <ReceptionHeader/>
      <div className="scan-full">
        <div className="scan-ful">
          <div className="scan">
            <QrReader
              ref={qrRef}
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
            <br/>
            {qrCodeValue && <p>Patient ID: {qrCodeValue}</p>}
            
            
          </div>
        </div>
      </div>  
    </div>
    
  )
}

export default ScanPatientQRRec;
