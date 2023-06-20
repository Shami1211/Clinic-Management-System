import React from "react";
import "./ScanQr.css";
import MainMemberHeader from '../Member/MainMemberHeader'
import frame from './MemberPhotos/frame.png'

const MemberScanQR = () => {


  return (
    <div>
      <MainMemberHeader />
    <div>
      <br></br>   <br></br>   <br></br>   <br></br>
       (
        <div className="q-box-1">
        <div className="q-box">
          <br></br>
          <p className="scan-qr-label">Scan QR From Here</p> <br></br>
          
          <div class="qr-logo">
              <img src={frame} className="qr-mem" alt="signin logo"/> 
            </div>
        </div>
        </div>
      )
    </div>
    </div>
  );
};

export default MemberScanQR;
