import React, { useRef, useState } from "react";
import QrReader from "react-qr-scanner";
import { useNavigate } from 'react-router-dom';
import AppointmentHome02nav from "./AppointmentHome02/AppointmentHome02nav"
const ScanAppointmentQR = () => {

  const navigate = useNavigate();
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

  navigate(`/viewPatientProfileForReception/${qrCodeValue}`);

  return (
    <div>
            <AppointmentHome02nav/>
            <br></br><br></br>  <br></br><br></br>
      <div className="scan-fullred">
    <div className="scan-fulr">
      <div className="scan">
      <QrReader
        ref={qrRef}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
</div>

      {qrCodeValue && <p>Patient ID: {qrCodeValue}</p>}
     
  

     
      </div>
      </div>
      <br></br>
    <br></br><br></br>
    </div>
    
    
  )
}

export default ScanAppointmentQR