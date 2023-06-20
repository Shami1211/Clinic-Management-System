import React, { useRef, useState } from "react";
import QrReader from "react-qr-scanner";
import Header from '../Laboratary/Header';
import { Link,useNavigate } from "react-router-dom";
import './CSS/ScanQR.css';

const ScanDPationQR = () => {
  const reportNavigate = useNavigate();
  
  //QR scan
  const qrRef = useRef(null);
  const [qrCodeValue, setQRCodeValue] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQRCodeValue(data.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  reportNavigate (`/pproforlab/${qrCodeValue}`)

  return (
    <div>
      <Header/><br/><br/><br/>
    <div className="scan-full">
      <div className="scan-fulr">
      <div className="scan">
        <QrReader 
          ref={qrRef}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" 
        }}/>
      </div>
   

  <br></br>

      {qrCodeValue && <p>Patient ID: {qrCodeValue}</p>}
    
      </div>


      </div>
      <br></br>
      
      
    </div>
    
  )
}

export default ScanDPationQR;

