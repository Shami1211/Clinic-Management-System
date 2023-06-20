import React, { useRef, useState, } from "react";
import QrReader from "react-qr-scanner";
import { useNavigate } from "react-router-dom";
import PNav from "../Phamacy/Phamacy_Home_02/PNav";
import './ScanDPationQR.css'

const ScanDPationQR = () => {
const drugNavigate = useNavigate();
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
drugNavigate (`/pproforpharmacy/${qrCodeValue}`)

return (
    <div>

      <PNav></PNav>

      <br></br><br></br><br></br><br></br>

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
          {qrCodeValue && <p>Patient ID: {qrCodeValue}</p>}
        </div>
      </div>
      <br></br>
      
    </div>
    
  )
}

export default ScanDPationQR;